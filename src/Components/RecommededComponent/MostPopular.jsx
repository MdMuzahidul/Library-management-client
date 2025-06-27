import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";
import BookCard from "../Books/BookCard";

const MostPopular = () => {
  useEffect(()=>{
    fetch()
  },[])
  return (
    <div className="bg-gray-100 mt-8">
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 py-4 shadow-lg">
        <div className="w-11/12 mx-auto flex justify-between items-center">
          <h3 className="text-3xl font-bold text-white">Most Popular</h3>
          <button className="bg-yellow-400 text-blue-800 px-6 py-2 rounded-lg shadow-md hover:bg-yellow-500 transition">
            See More
          </button>
        </div>
      </div>

      {/* Redesigned Marquee Section */}
      <div className="relative">
        <Marquee speed={60} pauseOnHover={true} gradient={false}>
          {[1, 2, 3, 4, 5, 6].map((_, index) => (
            <div
              key={index}
              className="mr-6 my-4 bg-white rounded-xl shadow-lg p-4 transition-transform transform hover:scale-105"
            >
              {/* <BookCard /> */}
            </div>
          ))}
        </Marquee>
        {/* Decorative Background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg shadow-inner"></div>
      </div>
    </div>
  );
};

export default MostPopular;
