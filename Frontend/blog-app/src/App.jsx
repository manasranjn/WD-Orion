import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import CreateBlog from "./Components/CreateBlog";
import BlogDetails from "./Components/BlogDetails";
import EditBlog from "./Components/EditBlog";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-blog" element={<CreateBlog />} />
          <Route path="/blog-details/:id" element={<BlogDetails />} />
          <Route path="/edit-blog/:id" element={<EditBlog />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
