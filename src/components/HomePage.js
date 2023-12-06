import React, { useEffect, useState } from "react";
import BlogList from "./BlogList";
import "../index.css";
import HomeNav from "./HomeNav";

const postAPI = "http://localhost:8001/posts";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

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
    fetch(postAPI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((response) => {
      if (response.ok) {
        // After successful submission, render the posts
        refetchPosts();
      } else {
        throw new Error("Failed to submit blog post");
      }
    });
  };

  const removePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
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
      />
    </div>
  );
};

export default HomePage;
