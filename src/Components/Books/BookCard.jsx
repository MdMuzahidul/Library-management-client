import React from "react";
import book1 from "../../assets/Book1.jpg";

const BookCard = () => {
  return (
    <div className="w-72 h-96 rounded-2xl overflow-hidden bg-white transition-shadow duration-300">
      {/* Book Image */}
      <img className="w-full h-1/2 object-cover" src={book1} alt="Book Cover" />
      {/* Book Details */}
      <div className="p-4 flex flex-col justify-between h-1/2">
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Book Title</h2>
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
            expedita!
          </p>
        </div>
        {/* Button Section */}
        <div className="mt-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            See Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
