import React, { useEffect, useState } from "react";
import BlogList from "./BlogList";
import "../index.css";
import HomeNav from "./HomeNav";

const postAPI = "http://localhost:8001/posts";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [isEditing, setIsEditing] = useState(false); 
  const [editPost, setEditPost] = useState(null); 

  useEffect(() => {
    fetch(postAPI)
      .then((res) => res.json())
      .then(setPosts);
  }, []);

  const refetchPosts = () => {
    fetch(postAPI)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to fetch posts");
        }
      })
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts", error));
  };

  const handlePostSubmit = (formData) => {
    if (isEditing) {

      fetch(`${postAPI}/${editPost.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then((response) => {
        if (response.ok) {
          refetchPosts();
          setIsEditing(false);
          setEditPost(null);
        } else {
          throw new Error("Failed to update blog post");
        }
      });
    } else {

      const newFormData = {...formData, likes: 0};

      fetch(postAPI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newFormData),
      }).then((response) => {
        if (response.ok) {
          refetchPosts();
        } else {
          throw new Error("Failed to submit blog post");
        }
      });
    }
  };

  const handleContentUpdate = (postId, updatedContent, updatedTitle, updatedDate) => {
    const updatedPosts = posts.map((post) =>
      post.id === postId ? { ...post, content: updatedContent, title: updatedTitle, date: updatedDate } : post
    );
    setPosts(updatedPosts);
  };
  

  const handleEditClick = (postId, updatedContent) => {
    setEditPost(postId);
    setIsEditing(true);
  };

  const removePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const addLike = (id) => {
    setPosts(posts.map(post => {
      if (post.id === id) {
        return { ...post, likes: parseInt(post.likes, 10) + 1 }; 
      }
      return post; 
    }));
  };
  


  const handleSearch = (searchText) => {
    setHasSearched(true);
    const lowerCaseSearchInput = searchText.toLowerCase();

    if (lowerCaseSearchInput.length === 0) {
      setFilteredPosts([]);
      setHasSearched(false);
    } else {
      setHasSearched(true);
      const filtered = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(lowerCaseSearchInput) ||
          post.content.toLowerCase().includes(lowerCaseSearchInput)
      );

      setFilteredPosts(filtered);
    }
  };

  return (
    <div>
      <HomeNav onSearch={handleSearch} onPostSubmit={handlePostSubmit} />
      <BlogList
        posts={hasSearched ? filteredPosts : posts}
        removePost={removePost}
        onEditClick={handleEditClick}
        onContentUpdate={handleContentUpdate}
        addLike={addLike}
      />
    </div>
  );
};

export default HomePage;
