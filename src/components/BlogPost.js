import React, { useState } from "react";
import "../index.css";

const BlogPost = ({ title, date, content }) => {

  const [clicked, setClicked] = useState(false);
  
  

  return (
    <div className="blog-post">
      <h2 className="blog-post-title">{title}</h2>
      <p className="blog-post-date">{date}</p>
      <div className="blog-post-content">{content}</div>
     
      <div className="details">
        {clicked ? (
      <button className="like-button active"onClick={() => setClicked(false)}>♥</button>
        ) : (
      <button className="like-button"onClick={() => setClicked(true)}>♡</button>
    )}
      <button>🗑️</button>
      
      </div>
    </div>


  );
};

export default BlogPost;
