import React from "react";
import { useNavigate } from "react-router-dom";

const RecommendBookCard = ({ book }) => {
  const navigate = useNavigate();
  if (!book) return null;
  return (
    <div className="flex items-center gap-6 p-5 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl shadow-md border border-green-100 hover:shadow-lg transition group min-w-[320px] md:min-w-[350px] w-full">
      <div className="w-20 h-28 rounded-lg bg-green-200 flex items-center justify-center overflow-hidden flex-shrink-0 border-2 border-green-300 group-hover:scale-105 transition-transform duration-200">
        <img
          src={book.coverImg || "/src/assets/Book1.jpg"}
          alt={book.title}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-green-800 text-lg truncate group-hover:text-blue-700 transition-colors duration-200">
          {book.title}
        </h3>
        <p className="text-gray-600 text-base truncate">{book.author}</p>
        <div className="flex flex-wrap gap-1 mt-2">
          {book.language && (
            <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs font-medium">
              {book.language}
            </span>
          )}
          {book.publisher && (
            <span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full text-xs font-medium">
              {book.publisher}
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-col items-end">
        {book.rating && (
          <span className="text-yellow-500 font-semibold text-base">
            ★ {book.rating}
          </span>
        )}
        <button
          className="mt-2 text-xs bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition"
          onClick={() => navigate(`/books/details/${book._id || book.id}`)}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default RecommendBookCard;
