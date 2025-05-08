import React from "react";
import Marquee from "react-fast-marquee";

const Notice = () => {
  return (
    <div className="bg-blue-600 text-white py-3 shadow-lg">
      <Marquee gradient={false} speed={50}>
        <div className="flex space-x-8 px-4">
          <div className="flex items-center justify-center font-semibold text-lg">
            📚 Welcome to the Book Library! Explore our collection of books and
            enjoy reading.
          </div>
          <div className="flex items-center justify-center font-semibold text-lg">
            🌟 Hi, I am Md Muzahidul Islam. I am a web developer learning
            React.js and Node.js.
          </div>
          <div className="flex items-center justify-center font-semibold text-lg">
            🚀 Discover new books and expand your knowledge with our curated
            library.
          </div>
          <div className="flex items-center justify-center font-semibold text-lg">
            📖 Join our community of book lovers and share your favorite reads!
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default Notice;
