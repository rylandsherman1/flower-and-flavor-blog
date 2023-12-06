import React, { useEffect, useState } from "react";
import BlogList from "./BlogList";
import "../index.css";
import HomeNav from "./HomeNav";

const postAPI = "http://localhost:8001/posts";

function HomePage() {
  const [posts, setPosts] = useState([]);

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
    })
      .then((response) => {
        if (response.ok) {
          // After successful submission, render the posts
          refetchPosts();
        } else {
          throw new Error("Failed to submit blog post");
        }
      })
  };

  return (
    <div> 
      <HomeNav onPostSubmit={handlePostSubmit}/>
      <BlogList posts={posts} />
    </div>
  );
}

export default HomePage;
