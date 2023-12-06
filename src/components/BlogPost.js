import React, { useState } from "react";
import "../index.css";

const BlogPost = ({ id, title, date, content, removePost }) => {
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(count + 1);
    setLike(true);
  };

  return (
    <div className="blog-post">
      <h2 className="blog-post-title">{title}</h2>
      <p className="blog-post-date">{date}</p>
      <div className="blog-post-content">{content}</div>

      <div className="details">
        {like ? (
          <button className="like-button active" onClick={handleButtonClick}>
            {count}♥
          </button>
        ) : (
          <button className="like-button" onClick={() => setLike(true)}>
            ♡
          </button>
        )}

        <button
          className="delete-button"
          onClick={() => {
            removePost(id);
          }}
        >
          🗑
        </button>
      </div>
    </div>
  );
};

export default BlogPost;
