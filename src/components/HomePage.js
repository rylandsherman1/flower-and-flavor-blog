import React, { useEffect, useState } from "react";
import BlogList from "./BlogList";

const postAPI = "http://localhost:8001/posts"

function HomePage(){

const [posts, setPosts] = useState([])

useEffect(() => {
  fetch(postAPI)
  .then(res => res.json())
  .then(setPosts)
},[])



  return (
    <div>
      <BlogList posts={posts} />
    </div>
  );
  }   

export default HomePage;




