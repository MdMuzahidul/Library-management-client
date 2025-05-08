import React from "react";
import book1 from "../../assets/Book1.jpg";

const BookCard = () => {
  return (
    <div className="w-72 h-96 rounded-2xl overflow-hidden bg-blue-200 p-4">
      <img
        className="w-full h-1/2 object-cover rounded-xl"
        src={book1}
        alt="Book Cover"
      />
      <div className="py-4">
        <h2 className="text-xl font-semibold mb-2">books title</h2>
        <p className="text-gray-600 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
          expedita!
        </p>
      </div>
      <div className="mt-4 text-right">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition">
          See Details
        </button>
      </div>
    </div>
  );
};

export default BookCard;
