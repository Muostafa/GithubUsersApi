import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <header>
        <Navbar />
      </header>

      <main className="flex-grow flex items-center justify-center bg-gray-200 dark:bg-light-navy">
        <Outlet />
      </main>

      <footer
        className="bg-slate text-white p-4 text-center"
        role="contentinfo"
      >
        <p>&copy; {new Date().getFullYear()} Mustafa's GitHub Users Explorer</p>
      </footer>
    </div>
  );
};

export default Layout;
