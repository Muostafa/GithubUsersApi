import React from "react";
import UsersList from "../components/UsersList";

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-6">
        GitHub Users Explorer
      </h1>
      <UsersList />
    </div>
  );
};

export default HomePage;
