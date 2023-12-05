import React from "react";
import BlogList from "./BlogList";

const HomePage = () => {
  // Hardcoded data for now
  const posts = [
    {
      id: 1,
      title: "The Secret of Perfect Croissants",
      date: "2023-05-01",
      content:
        "Discover the art of making buttery, flaky croissants at home. We'll share our secret recipe for the perfect dough. First we will make the dough, then we will fold the dough, then we will bake the dough.Then we will eat the dough. Discover the art of making buttery, flaky croissants at home. We'll share our secret recipe for the perfect dough. First we will make the dough, then we will fold the dough, then we will bake the dough.Then we will eat the dough.Discover the art of making buttery, flaky croissants at home. We'll share our secret recipe for the perfect dough. First we will make the dough, then we will fold the dough, then we will bake the dough.Then we will eat the dough.Discover the art of making buttery, flaky croissants at home. We'll share our secret recipe for the perfect dough. First we will make the dough, then we will fold the dough, then we will bake the dough.Then we will eat the dough.Discover the art of making buttery, flaky croissants at home. We'll share our secret recipe for the perfect dough. First we will make the dough, then we will fold the dough, then we will bake the dough.Then we will eat the dough.",
    },
    {
      id: 2,
      title: "Exploring the World of Artisanal Sourdough",
      date: "2023-05-15",
      content: "Sourdough bread has been a beloved staple for centuries...",
    },
  ];

  return (
    <div>
      <BlogList posts={posts} />
    </div>
  );
};

export default HomePage;
