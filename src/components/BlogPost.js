import React, { useState } from "react";
import "../index.css";

const BlogPost = ({ id, title, date, content, removePost, onEditClick, onContentUpdate }) => {
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(content);
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedDate, setUpdatedDate] = useState(date);


  const handleButtonClick = () => {
    setCount(count + 1);
    setLike(true);
  };

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setIsEditing(false);
      const updatedContent = editedContent;
      const updatedTitleValue = updatedTitle; 
      const updatedDateValue = updatedDate; 
      onContentUpdate(id, updatedContent, updatedTitleValue, updatedDateValue);
      onEditClick(); 
    }
  };
  
  



  return (
    <div className="blog-post">
      <h2 className="blog-post-title">{title}</h2>
      <p className="blog-post-date">{date}</p>

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
        <button className="edit-button" onClick={() => setIsEditing(true)}>
          ✎
        </button>
      </div>

      {isEditing ? (
        <div>
          <input
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
            placeholder="Title"
          />
          <input
            type="text"
            value={updatedDate}
            onChange={(e) => setUpdatedDate(e.target.value)}
            placeholder="Date"
          />
          <textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            onKeyDown={handleUpdatedDone}
            className="blog-post-content"
            placeholder="Content"
          />
        </div>
      ) : (
        <div className="blog-post-content">{content}</div>
      )}
    </div>
  );
};

export default BlogPost;
