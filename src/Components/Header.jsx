import React, { useContext, useState } from "react";
import logo from "../assets/Logo.jpg";
import profile from "../assets/Profile.jpg";
import { NavLink } from "react-router-dom";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { HiMenu, HiX } from "react-icons/hi";
import { AuthContext } from "../UseContext/AuthProvider";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut();
  };

  return (
    <div className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white shadow-md">
      <div className="flex justify-between items-center w-11/12 mx-auto py-4">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <img className="h-12 w-12 rounded-md" src={logo} alt="library" />
          <div>
            <p className="text-2xl font-bold text-yellow-400">AMOR 21</p>
            <p className="text-sm uppercase font-semibold text-gray-300">
              Library
            </p>
          </div>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-3xl focus:outline-none"
          >
            {isMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex flex-col lg:flex-row gap-6 text-lg absolute lg:static top-16 right-0 w-full lg:w-auto lg:bg-transparent p-4 lg:p-0`}
        >
          <NavLink
            className="hover:text-yellow-400 transition"
            to="/"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            className="hover:text-yellow-400 transition"
            to="/books"
            onClick={() => setIsMenuOpen(false)}
          >
            Books
          </NavLink>
          <NavLink
            className="hover:text-yellow-400 transition"
            to="/blog"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </NavLink>
          <NavLink
            className="hover:text-yellow-400 transition"
            to="/about"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </NavLink>
          <NavLink
            className="hover:text-yellow-400 transition"
            to="/allusers"
            onClick={() => setIsMenuOpen(false)}
          >
            All Users
          </NavLink>
          <NavLink
            className="hover:text-yellow-400 transition"
            to="/pending-requests-of-admin"
            onClick={() => setIsMenuOpen(false)}
          >
            Pending Requests
          </NavLink>
          <NavLink
            className="hover:text-yellow-400 transition"
            to="/approved-list"
            onClick={() => setIsMenuOpen(false)}
          >
            Approved List
          </NavLink>
        </div>

        {/* Search and Profile Section */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center bg-white rounded-full px-3 py-1">
            <input
              className="bg-transparent text-black text-sm focus:outline-none"
              type="text"
              placeholder="Search..."
            />
            <button className="text-blue-600 hover:text-blue-800">
              <HiMiniMagnifyingGlass size={20} />
            </button>
          </div>
          {user && (
            <div className="relative z-50">
              <img
                className="w-10 h-10 rounded-full border-2 border-yellow-400 cursor-pointer"
                src={user?.photoURL || profile}
                alt="profile"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              />
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg">
                  <NavLink
                    to="/dashboard"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Dashboard
                  </NavLink>
                  <NavLink
                    to="/pending-requests"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Pending Requests
                  </NavLink>
                  <NavLink
                    to="/borrowed-books"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Borrow Book List
                  </NavLink>
                  <button
                    className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                    onClick={() => {
                      setIsDropdownOpen(false);
                      handleLogout();
                      // Add logout logic here
                    }}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
          {!user && (
            <NavLink
              to={{
                pathname: "/login",
                state: { from: "kkk" },
              }}
              className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
