import React, { useState } from "react";
import "../index.css";

const BlogPost = ({
  id,
  title,
  date,
  content,
  likes,
  addLike,
  removePost,
  onEditClick,
  onContentUpdate,
}) => {
  const [like, setLike] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(content);
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedDate, setUpdatedDate] = useState(date);

  const postLike = () => {
    const updateLikes = likes + 1;
    setLike(true);

    fetch(`http://localhost:8001/posts/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ likes: updateLikes }),
    }).then(() => {
      addLike(id);
    });
  };

  const deletePost = () => {
    fetch(`http://localhost:8001/posts/${id}`, {
      method: "DELETE",
    }).then(() => {
      removePost(id);
    });
  };

  const handleUpdatedDone = (event) => {
    if (event.key === "Enter") {
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
        <button className="delete-button" onClick={deletePost}>
          🗑
        </button>
        <button className="edit-button" onClick={() => setIsEditing(true)}>
          ✎
        </button>
      </div>

      {isEditing && (
        <div className="p-4 bg-custom post-bg rounded">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              value={updatedTitle}
              onChange={(e) => setUpdatedTitle(e.target.value)}
              placeholder="Title"
              className="input border rounded w-full py-2 px-3"
            />
            <input
              type="text"
              value={updatedDate}
              onChange={(e) => setUpdatedDate(e.target.value)}
              placeholder="Date"
              className="input border rounded w-full py-2 px-3"
            />
          </div>
          <textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            onKeyDown={handleUpdatedDone}
            className="mt-4 border rounded w-full py-2 px-3"
            placeholder="Content"
          />
        </div>
      )}
    </div>
  );
};

export default BlogPost;
