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

  return (
    <div>
      <HomeNav />
      <BlogList posts={posts} />
    </div>
  );
}

export default HomePage;
