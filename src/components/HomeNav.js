import React, { useRef } from "react";
import BlogSubmitForm from "./BlogSubmitForm";

const HomeNav = ({ onPostSubmit, onSearch }) => {
  const searchInputRef = useRef(null);

  const handleSearch = () => {
    const searchText = searchInputRef.current.value.toLowerCase();
    onSearch(searchText);
  };

  return (
    <div className="container">
      <div className="flex flex-col md:flex-row justify-between items-center py-4 px-6">
        <div className="w-full md:w-3/4 mb-4 md:mb-0">
          <BlogSubmitForm onPostSubmit={onPostSubmit} />
        </div>

        <div className="flex border-2 border-custom-darker-brown rounded-md mt-4 md:mt-0 md:ml-4">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 w-full"
            ref={searchInputRef}
            onChange={handleSearch}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeNav;
