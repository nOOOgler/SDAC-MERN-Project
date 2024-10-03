import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await axios.get("/api/blogs");
      setBlogs(res.data);
    };
    fetchBlogs();
  }, []);

  return (
    <div>
      <br />
      <h1 className="title display-5">
        <center>Welcome to BlogIt.</center>
      </h1>
      <div className="container">
        <div className="row">
          {blogs.map((blog) => (
            <div className="col-md-4" key={blog._id}>
              <div className="card mb-4 ">
                <img
                  src={blog.imageUrl}
                  className="card-img-top"
                  alt={blog.title}
                />
                <div className="card-body ">
                  <h5 className="card-title">{blog.title}</h5>
                  <p className="card-text">
                    {blog.content.substring(0, 100)}...
                  </p>
                  <Link to={`/blogs/${blog._id}`} className="btn btn-primary">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
