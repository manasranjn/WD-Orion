import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BlogDetails = () => {
  const params = useParams();
  // console.log(params);
  const id = params.id;
  const [post, setPost] = useState({});
  const navigate = useNavigate();

  const getPost = () => {
    axios
      .get(`http://localhost:5000/blogs/${id}`)
      .then((res) => {
        // console.log(res.data);
        setPost(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deletePost = () => {
    axios
      .delete(`http://localhost:5000/blogs/${id}`)
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className="bg-[#F0F0DB] min-h-screen px-4 md:px-8 lg:px-14 py-6 md:py-16 flex justify-center items-center">
      <div className="max-w-2xl w-[90%] bg-[#ACBAC4] rounded-lg p-4 shadow-lg">
        <h3 className="text-xl :md:text-2xl lg:text-3xl">{post?.title}</h3>
        <p className="my-3">
          <span className="font-semibold">Description:</span>{" "}
          {post?.description}
        </p>
        <button
          className="px-6 py-2 rounded bg-red-500 text-white cursor-pointer"
          onClick={deletePost}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BlogDetails;
