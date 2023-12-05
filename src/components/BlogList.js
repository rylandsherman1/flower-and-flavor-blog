import React from "react";
import BlogPost from "./BlogPost";
import "../index.css";

const BlogList = ({ posts }) => {
  return (
    <div className="container">
      {" "}
      <div className="blog-list">
        {posts.map((post) => (
          <BlogPost
            key={post.id}
            title={post.title}
            date={post.date}
            content={post.content}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
