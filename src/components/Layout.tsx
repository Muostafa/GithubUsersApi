import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <header>
        <Navbar />
      </header>

      <main className="flex-grow px-4 py-6">
        <Outlet />
      </main>

      <footer
        className="bg-slate text-white p-4 text-center"
        role="contentinfo"
      >
        <p>&copy; {new Date().getFullYear()} GitHub Users Explorer</p>
      </footer>
    </div>
  );
};

export default Layout;
