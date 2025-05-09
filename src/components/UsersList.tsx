import React from "react";
import { useGithub } from "../context/GithubContext";
import UserCard from "./UserCard";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";

const UsersList = () => {
  const { users, loading, error } = useGithub();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative my-4"
        role="alert"
      >
        <strong className="font-bold">Error:</strong>
        <span className="block sm:inline"> {error}</span>
      </div>
    );
  }

  return (
    <div>
      <SearchBar />
      {users.length === 0 && (
        <div className="text-center py-10">
          <p className="text-gray-600 dark:text-white">
            No users found matching your search.
          </p>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-6">
        {users.map((user) => (
          <UserCard
            key={user.id}
            id={user.id}
            login={user.login}
            avatar_url={user.avatar_url}
            html_url={user.html_url}
          />
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default UsersList;
