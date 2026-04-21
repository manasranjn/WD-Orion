import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();
  const [allPosts, setAllPosts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const getAllPost = () => {
    setLoading(true);
    axios
      .get("http://localhost:5000/api/posts")
      .then((res) => {
        // console.log(res.data);
        setAllPosts(res?.data);
        setError("");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError("Failed to get posts");
        setLoading(false);
      });
  };

  const deletePost = (id) => {
    setLoading(true);
    axios
      .delete(`http://localhost:5000/api/posts/${id}`)
      .then((res) => {
        // console.log(res.data);
        getAllPost();
        setError("");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError("Failed to delete post");
        setLoading(false);
      });
  };

  useEffect(() => {
    getAllPost();
  }, []);

  // console.log("All post", allPosts);

  return (
    <div className="bg-[#F0F0DB] min-h-screen px-4 md:px-8 lg:px-14 py-6 md:py-16">
      {error ? (
        <h1 className="text-xl md:text-2xl lg:text-4xl mb-4 text-red-600">
          {error}
        </h1>
      ) : (
        <h1 className="text-xl md:text-2xl lg:text-4xl mb-4">All Blogs </h1>
      )}
      {loading ? (
        <h1 className="text-xl md:text-2xl lg:text-4xl mb-4 text-gray-600">
          Loading...
        </h1>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {allPosts?.map((post) => (
            <div
              className="bg-[#ACBAC4] p-4 rounded flex gap-2 flex-col"
              key={post._id}
            >
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold">
                {post?.title.slice(0, 30)}
                {post?.title.length > 30 && "..."}
              </h3>
              <p>
                {post?.details.slice(0, 150)}
                {post?.details.length > 150 && (
                  <span
                    onClick={() => navigate(`/blog-details/${post._id}`)}
                    className="text-blue-700 underline cursor-pointer"
                  >
                    Read More
                  </span>
                )}
              </p>
              <div className="flex justify-between items-center">
                <button
                  className="w-32 py-2 flex items-center gap-2 justify-center cursor-pointer rounded bg-blue-500 text-white font-semibold"
                  onClick={() => navigate(`/edit-blog/${post._id}`)}
                >
                  Edit <FaRegEdit />
                </button>
                <button
                  className="w-32 py-2 flex items-center gap-2 justify-center cursor-pointer rounded bg-red-500 text-white font-semibold"
                  onClick={() => deletePost(post._id)}
                >
                  Delete <MdDeleteOutline size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
