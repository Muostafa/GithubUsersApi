import React, { createContext, useState, useContext, useEffect } from "react";

// Define types
type GithubUser = {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
};

type GithubContextType = {
  users: GithubUser[];
  loading: boolean;
  error: string | null;
  currentPage: number;
  totalPages: number;
  searchTerm: string;
  favorites: GithubUser[];
  fetchUsers: () => Promise<void>;
  goToPage: (page: number) => void;
  setSearchTerm: (term: string) => void;
  toggleFavorite: (user: GithubUser) => void;
  isFavorite: (id: number) => boolean;
};

const GithubContext = createContext<GithubContextType | undefined>(undefined);

// Function to load initial favorites from localStorage
const loadInitialFavorites = (): GithubUser[] => {
  const storedFavorites = localStorage.getItem("githubFavorites");
  if (storedFavorites) {
    try {
      const parsedFavorites = JSON.parse(storedFavorites);
      // Basic validation: check if it's an array
      if (Array.isArray(parsedFavorites)) {
        return parsedFavorites;
      }
      console.error("Stored favorites is not an array:", parsedFavorites);
      return [];
    } catch (e) {
      console.error("Error parsing stored favorites for initial state", e);
      return []; // Fallback to empty array on parse error
    }
  }
  return []; // Fallback if nothing in localStorage
};

export const GithubProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [users, setUsers] = useState<GithubUser[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [favorites, setFavorites] =
    useState<GithubUser[]>(loadInitialFavorites);

  const usersPerPage = 8;

  // Save favorites to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("githubFavorites", JSON.stringify(favorites));
  }, [favorites]);

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      // Fetch more users than we need for the first page to support search
      const response = await fetch("https://api.github.com/users");
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      const data = await response.json();
      setUsers(data);
      setTotalPages(Math.ceil(data.length / usersPerPage));
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
    } finally {
      setLoading(false);
    }
  };

  const goToPage = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const toggleFavorite = (user: GithubUser) => {
    setFavorites((prevFavorites) =>
      prevFavorites.some((fav) => fav.id === user.id)
        ? prevFavorites.filter((fav) => fav.id !== user.id)
        : [...prevFavorites, user]
    );
  };

  const isFavorite = (id: number) => {
    return favorites.some((fav) => fav.id === id);
  };

  // Filter users based on search term
  const filteredUsers = users.filter((user) =>
    user.login.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Get current page users
  const getCurrentPageUsers = () => {
    const startIdx = (currentPage - 1) * usersPerPage;
    const endIdx = startIdx + usersPerPage;
    return filteredUsers.slice(startIdx, endIdx);
  };

  // Recalculate total pages when filtered users change
  useEffect(() => {
    setTotalPages(Math.ceil(filteredUsers.length / usersPerPage));
    // Reset to first page if current page is now invalid
    if (currentPage > Math.ceil(filteredUsers.length / usersPerPage)) {
      setCurrentPage(1);
    }
  }, [filteredUsers.length]);

  // Fetch users on initial render
  useEffect(() => {
    fetchUsers();
  }, []);

  const value = {
    users: getCurrentPageUsers(),
    loading,
    error,
    currentPage,
    totalPages,
    searchTerm,
    favorites,
    fetchUsers,
    goToPage,
    setSearchTerm,
    toggleFavorite,
    isFavorite,
  };

  return (
    <GithubContext.Provider value={value}>{children}</GithubContext.Provider>
  );
};

export const useGithub = () => {
  const context = useContext(GithubContext);
  if (context === undefined) {
    throw new Error("useGithub must be used within a GithubProvider");
  }
  return context;
};
