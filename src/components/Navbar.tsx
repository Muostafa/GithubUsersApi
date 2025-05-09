import React from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-slate text-white shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-4">
        <Link to="/" className="text-xl font-bold">
          GitHub Users Explorer
        </Link>
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className={`px-4 py-2 rounded-md  ${
              location.pathname === "/"
                ? "bg-blue-600 text-white"
                : "hover:bg-light-slate"
            }`}
          >
            Home
          </Link>
          <Link
            to="/favorites"
            className={`px-4 py-2 rounded-md ${
              location.pathname === "/favorites"
                ? "bg-blue-600 text-white"
                : "hover:bg-light-slate"
            }`}
          >
            Favorites
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
