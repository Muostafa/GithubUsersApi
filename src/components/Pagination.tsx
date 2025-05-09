import React from "react";
import { useGithub } from "../context/GithubContext";
import {
  ArrowLeft,
  ArrowRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

const Pagination = () => {
  const { currentPage, totalPages, goToPage } = useGithub();

  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center space-x-2 my-6">
      <button
        onClick={() => goToPage(1)}
        disabled={currentPage === 1}
        className={`p-2 rounded ${
          currentPage === 1
            ? "text-gray-400 cursor-not-allowed"
            : "text-blue-600 hover:bg-blue-100"
        }`}
        aria-label="First page"
      >
        <ChevronsLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className={`p-2 rounded ${
          currentPage === 1
            ? "text-gray-400 cursor-not-allowed"
            : "text-blue-600 hover:bg-blue-100"
        }`}
        aria-label="Previous page"
      >
        <ArrowLeft className="w-5 h-5" />
      </button>

      <div className="text-sm px-4 py-2 rounded dark:text-white">
        <span className="font-medium">{currentPage}</span> of{" "}
        <span>{totalPages}</span>
      </div>

      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`p-2 rounded ${
          currentPage === totalPages
            ? "text-gray-400 cursor-not-allowed"
            : "text-blue-600 hover:bg-blue-100"
        }`}
        aria-label="Next page"
      >
        <ArrowRight className="w-5 h-5" />
      </button>
      <button
        onClick={() => goToPage(totalPages)}
        disabled={currentPage === totalPages}
        className={`p-2 rounded ${
          currentPage === totalPages
            ? "text-gray-400 cursor-not-allowed"
            : "text-blue-600 hover:bg-blue-100"
        }`}
        aria-label="Last page"
      >
        <ChevronsRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Pagination;
