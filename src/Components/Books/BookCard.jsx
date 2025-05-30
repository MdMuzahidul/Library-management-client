import React from "react";
import { useNavigate } from "react-router-dom";
import defaultCover from "../../assets/Book1.jpg";

const BookCard = ({ book }) => {
  const { title, author, language, coverImg } = book;
  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row transition-transform  duration-300 border border-gray-200">
      <div className="md:w-1/3 w-full flex  items-center justify-center bg-gray-100 ">
        <img
          src={coverImg || defaultCover}
          alt={title}
          className="object-cover h-40 w-32 rounded-lg shadow-md "
        />
      </div>
      <div className="flex-1 border-l-8 border-blue-700  p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold text-blue-800 mb-2">{title}</h2>
          <p className="text-gray-600 mb-1">
            <span className="font-semibold">Language:</span> {language}
          </p>
          <p className="text-gray-700 mb-3">
            <span className="font-semibold">Author:</span> {author}
          </p>
        </div>
        <div className="flex justify-end">
          <button
            onClick={() => navigate(`/books/details/${book._id}`)}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition font-semibold"
          >
            See Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
