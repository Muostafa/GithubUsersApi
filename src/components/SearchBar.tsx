import React, { useState, useEffect } from "react";
import { useGithub } from "../context/GithubContext";

const SearchBar = () => {
  const { setSearchTerm } = useGithub();
  const [input, setInput] = useState("");

  // Implement debounced search
  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      setSearchTerm(input);
    }, 400);

    return () => clearTimeout(debounceTimeout);
  }, [input, setSearchTerm]);

  return (
    <div className="w-full max-w-md mx-auto my-4">
      <div className="relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </span>
        <input
          type="text"
          className="w-full py-2 pl-10 pr-4 text-gray-900 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search users..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
