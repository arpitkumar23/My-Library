import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Login from "./Login";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [menuOpen, setMenuOpen] = useState(false); 
  const element = document.documentElement;
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const listItems = [
    { name: "Home", path: "/" },
    { name: "Course", path: "/Course" },
    { name: "Contact", path: "/Contact" },
  ];

  return (
    <div
      className={`md:px-20 px-4 mx-auto fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out ${
        sticky ? "shadow-md bg-white z-50" : "bg-transparent"
      }`}
    >
      <div className="navbar flex justify-between items-center py-4"> 
        <div className="navbar-start">
          <Link to="/" className="text-xl font-bold text-black">
          My Library 
          </Link>
        </div> 
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-black">
            {listItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? "text-blue-600" : "text-black"
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div> 
        <div className="navbar-end space-x-4 flex items-center">
          
          <button
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-slate-800"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Login
          </button>
          <Login /> 
          <button
            className="lg:hidden p-2 rounded-md focus:outline-none"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div> 
      {menuOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-800 py-4">
          <ul className="menu flex flex-col px-4 space-y-2">
            {listItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600"
                      : "text-black dark:text-white"
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
