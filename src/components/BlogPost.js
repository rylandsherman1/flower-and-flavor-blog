import React from "react";
import "../index.css";

const BlogPost = ({ title, date, content }) => {
  return (
    <div className="blog-post">
      <h2 className="blog-post-title">{title}</h2>
      <p className="blog-post-date">{date}</p>
      <div className="blog-post-content">{content}</div>
    </div>
  );
};

export default BlogPost;
