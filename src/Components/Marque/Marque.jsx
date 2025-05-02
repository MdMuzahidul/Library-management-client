import React from "react";
import Marquee from "react-fast-marquee";

const Marque = () => {
  return (
    <div className="flex items-center mx-auto bg-gray-300 my-3  shadow-lg">
      <Marquee>
        <div className="flex space-x-4 p-4">
          <div className="flex items-center justify-center h-8 font-bold text-lg px-4">
            Welcome to the Book Library! Explore our collection of books and
            enjoy reading.
          </div>
          <div className="flex items-center justify-center h-8 font-bold text-lg px-4">
            Hi, I am Md Muzahidul Islam. I am a web developer. I am learning
            react js and node js.
          </div>
          <div className="flex items-center justify-center h-8 font-bold text-lg px-4">
            Hi, I am Md Muzahidul Islam. I am a web developer. I am learning
            react js and node js.
          </div>
          <div className="flex items-center justify-center h-8 font-bold text-lg px-4">
            Hi, I am Md Muzahidul Islam. I am a web developer. I am learning
            react js and node js.
          </div>
        </div>
      </Marquee>
    </div>
  );
};
export default Marque;
