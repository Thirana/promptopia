"use client";

import { useState, useEffect } from "react";

import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

// Feed Components starts here
const Feed = () => {
  // State to stroe prompt data
  const [allPosts, setAllPosts] = useState([]);

  // Search States
  const [searchText, setSearchText] = useState("");

  // API end point to get Prompt data
  const fetchPosts = async () => {
    const response = await fetch("/api/prompt");
    const data = await response.json();

    setAllPosts(data);
  };

  // Execute fetchPosts() function
  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSearchChange = (e) => {};

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      {/* All Prompts */}

      <PromptCardList data={allPosts} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;
