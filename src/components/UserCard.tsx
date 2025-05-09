import React from "react";
import { Star } from "lucide-react";
import { useGithub } from "../context/GithubContext";

type UserCardProps = {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
};

const UserCard = ({ id, login, avatar_url, html_url }: UserCardProps) => {
  const { toggleFavorite, isFavorite } = useGithub();
  const favorited = isFavorite(id);

  const user = { id, login, avatar_url, html_url };

  return (
    <div className="bg-white dark:bg-slate rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <img
            src={avatar_url}
            alt={`${login}'s avatar`}
            className="w-16 h-16 rounded-full object-cover"
          />
          <button
            onClick={() => toggleFavorite(user)}
            className={`p-2 rounded-full transition-colors ${
              favorited
                ? "text-yellow-500"
                : "text-gray-400 hover:text-yellow-500"
            }`}
            aria-label={
              favorited ? "Remove from favorites" : "Add to favorites"
            }
          >
            <Star className={`w-6 h-6 ${favorited ? "fill-current" : ""}`} />
          </button>
        </div>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white truncate">
          {login}
        </h3>
        <div className="mt-4 flex justify-between items-center">
          <a
            href={html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            View Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
