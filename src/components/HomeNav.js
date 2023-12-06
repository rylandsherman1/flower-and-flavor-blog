import React, { useRef } from "react";

const HomeNav = ({ onSearch }) => {
  const searchInputRef = useRef(null);

  const handleSearch = () => {
    const searchText = searchInputRef.current.value.toLowerCase();
    onSearch(searchText);
  };
  return (
    <div className="container">
      <div className="flex flex-col md:flex-row justify-between items-center py-4 px-6">
        {/* Navigation Buttons */}
        <div className="flex mb-4 md:mb-0 space-x-4">
          <button className="bg-custom-brown hover:bg-custom-darker-brown text-white font-bold py-2 px-4 rounded">
            Pastries
          </button>
          <button className="bg-custom-brown hover:bg-custom-darker-brown text-white font-bold py-2 px-4 rounded">
            Cakes
          </button>
          <button className="bg-custom-brown hover:bg-custom-darker-brown text-white font-bold py-2 px-4 rounded">
            Donuts
          </button>
          <button className="bg-custom-brown hover:bg-custom-darker-brown text-white font-bold py-2 px-4 rounded">
            bread
          </button>
        </div>

        {/* Search Input */}
        <div className="flex border-2 border-custom-darker-brown rounded-md">
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
