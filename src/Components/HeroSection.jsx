import React from "react";
import heroimg from "../assets/banar.jpg";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="w-11/12 mx-auto flex flex-col-reverse lg:flex-row justify-between items-center my-12 gap-12">
      {/* Text Section */}
      <div className="text-center lg:text-left lg:w-1/2">
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 text-gray-800 leading-tight">
          Welcome to <span className="text-blue-600">Our Library</span>
        </h1>
        <p className="text-lg lg:text-xl text-gray-600 mb-8">
          Discover a world of knowledge, adventure, and inspiration with our
          carefully curated collection of books. Your next great read awaits!
        </p>
        <div className="flex justify-center lg:justify-start gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition">
            Explore Now
          </button>
          <NavLink to="/library">
            <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-300 transition">
              Learn More
            </button>
          </NavLink>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2">
        <img
          className="rounded-xl shadow-2xl w-full hover:scale-105 transition-transform duration-300"
          src={heroimg}
          alt="Library Banner"
        />
      </div>
    </div>
  );
};

export default HeroSection;
