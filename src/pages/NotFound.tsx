import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center flex-grow text-text-base dark:text-white transition-colors duration-200 my-auto">
      <div className="text-center px-4">
        <h1 className="text-5xl font-extrabold mb-4">404</h1>
        <p className="text-xl mb-6">Oops! Page not found</p>
        <Link
          to="/"
          className="text-purple hover:underline hover:text-orange transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
