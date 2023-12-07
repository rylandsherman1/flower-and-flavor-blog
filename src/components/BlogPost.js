import React, { useState } from "react";
import "../index.css";


const BlogPost = ({ id, title, date, content, likes, addLike, removePost }) => {

  const [like, setLike] = useState(false);
  
  const postLike = () => {
    const updateLikes = likes + 1;
    setLike(true);


    fetch(`http://localhost:8001/posts/${id}`,{
      method:"PATCH",
      headers: {
      "Content-type": "application/json"},
      body: JSON.stringify({likes: updateLikes})
    }).then(() => {
      addLike(id)
     
    })
    
  }

const deletePost = () => {
  fetch(`http://localhost:8001/posts/${id}`, {
    method: "DELETE"
  }).then(() => {
    removePost(id)
  })
  
}

  return (
    <div className="blog-post">
      <h2 className="blog-post-title">{title}</h2>
      <p className="blog-post-date">{date}</p>
      <div className="blog-post-content">{content}</div>

      <div className="details">
        <p className="blog-post-likes">{likes}</p>
        
        {like ? (
        <button className="like-button active" onClick={postLike}>
             ♥
        </button>
          ) : (
        <button className="like-button" onClick={postLike}>
            ♡
        </button>
)}
        <button
          className="delete-button"
          onClick={deletePost}
        >
          🗑
        </button>
      </div>
    </div>
  );
};

export default BlogPost;





