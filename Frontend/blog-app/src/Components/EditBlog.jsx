import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const EditBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const { id } = useParams();
  // console.log(id);

  const getPost = () => {
    axios
      .get(`http://localhost:5000/blogs/${id}`)
      .then((res) => {
        setTitle(res.data.title);
        setDescription(res.data.description);
        // console.log(res);
        setError("");
        setMessage("");
      })
      .catch((err) => {
        console.log(err);
        setError("Failed to get post");
        setMessage("");
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const blog = {
      title,
      description,
    };

    axios
      .put(`http://localhost:5000/blogs/${id}`, blog)
      .then((res) => {
        console.log(res.data);
        setMessage("Post Updated Successfully");
        setError("");
      })
      .catch((err) => {
        // console.log(err);
        setError("Post Updation Failed");
        setMessage("");
      });

    console.log(blog);
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className="bg-[#F0F0DB] min-h-screen px-4 md:px-8 lg:px-14 py-6 md:py-16 flex justify-center items-center">
      <form className="bg-[#ACBAC4] rounded-lg p-6 flex flex-col gap-3 w-xl">
        <h2 className="text-xl md:text-2xl text-center">Update a Post</h2>
        {message && (
          <p className="text-green-600 font-semibold text-center">{message}</p>
        )}
        {error && (
          <p className="text-red-600 font-semibold text-center">{error}</p>
        )}
        <input
          type="text"
          placeholder="Enter Post Title"
          className="bg-white rounded outline-none border-none p-3 md:text-lg"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          rows={5}
          placeholder="Enter Post Description"
          className="bg-white rounded outline-none border-none p-3 md:text-lg"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button
          className="bg-blue-500 text-white md:text-lg font-semibold p-3 rounded cursor-pointer"
          onClick={handleSubmit}
        >
          Update Post
        </button>
      </form>
    </div>
  );
};

export default EditBlog;
