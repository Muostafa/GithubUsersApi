import React from "react";
import { useGithub } from "../context/GithubContext";
import UserCard from "../components/UserCard";
import { Link } from "react-router-dom";

const FavoritesPage = () => {
  const { favorites } = useGithub();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
        Your Favorite Users
      </h1>

      {favorites.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favorites.map((user) => (
            <UserCard
              key={user.id}
              id={user.id}
              login={user.login}
              avatar_url={user.avatar_url}
              html_url={user.html_url}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-10 text-gray-600 dark:text-gray-300">
          <p>You haven't added any favorites yet.</p>
          <p className="mt-2 ">
            <Link to="/" className="hover:underline text-blue-600">
              Go back to the home page
            </Link>{" "}
            to explore GitHub users.
          </p>
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
