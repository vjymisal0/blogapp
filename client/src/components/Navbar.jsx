import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="p-4 mt-5 w-[60vw] mx-auto flex justify-center items-center gap-10 font-bold text-lg shadow-md rounded-md border">
      <Link to="/">Home</Link>
      <Link to="/create">Create</Link>
    </nav>
  );
};

export default Navbar;
