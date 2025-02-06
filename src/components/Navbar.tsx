import React from "react";
import { Link } from "react-router-dom"; 

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center p-6 bg-gray-800 text-white">
      <Link to="/" className="text-xl font-bold">
        BrandName
      </Link>
      <div className="space-x-6">
        <Link to="/" className="hover:text-gray-400">Home</Link>
        <Link to="/agenda" className="hover:text-gray-400">Agenda</Link>
        <Link to="/register" className="hover:text-gray-400">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
