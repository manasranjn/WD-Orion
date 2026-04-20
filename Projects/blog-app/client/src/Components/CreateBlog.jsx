import React, { useState } from "react";
import { MdOutlineDone } from "react-icons/md";
import axios from "axios";
import { RxCross2 } from "react-icons/rx";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description) {
      setError("Please enter title and description");
      setMessage("");
      return;
    }

    const blog = {
      title,
      details: description,
    };

    // console.log(blog);

    axios
      .post("http://localhost:5000/api/posts/", blog)
      .then((res) => {
        // console.log(res.data);
        setMessage("Post Created Successfully");
        setError("");
        setTitle("");
        setDescription("");
      })
      .catch((err) => {
        // console.log(err.message);
        setError("Post Creation Failed");
        setMessage("");
      });
  };

  return (
    <div className="bg-[#F0F0DB] min-h-screen px-4 md:px-8 lg:px-14 py-6 md:py-16 flex justify-center items-center">
      <form className="bg-[#ACBAC4] rounded-lg p-6 flex flex-col gap-3 w-xl">
        <h2 className="text-xl md:text-2xl text-center">Create a Post</h2>
        {message && (
          <p className="text-green-600 font-semibold flex gap-2 items-center justify-center">
            <MdOutlineDone size={20} />
            {message}
          </p>
        )}

        {error && (
          <p className="text-red-600 font-semibold flex gap-2 items-center justify-center">
            <RxCross2 size={20} />
            {error}
          </p>
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
          className="bg-green-500 text-white md:text-lg font-semibold p-3 rounded cursor-pointer"
          onClick={handleSubmit}
        >
          Create Post
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
