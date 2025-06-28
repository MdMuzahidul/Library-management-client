import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BookCard from "../Books/BookCard";

const MostPopular = () => {
  const [popularBooks, setPopularBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:5000/popular/books")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch popular books");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setPopularBooks(data);
        setError(null);
      })
      .catch((error) => {
        console.error("Error fetching popular books:", error);
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return (
    <div className="bg-gray-100 mt-8">
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 py-4 shadow-lg">
        <div className="w-11/12 mx-auto flex justify-between items-center">
          <h3 className="text-3xl font-bold text-white">Most Popular</h3>
        </div>
      </div>

      {/* Redesigned Marquee Section */}
      <div className="relative">
        {error ? (
          <div className="text-center py-8">
            <p className="text-red-600 font-semibold">Error loading popular books: {error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Try Again
            </button>
          </div>
        ) : (
          <Marquee speed={60} pauseOnHover={true} gradient={false}>
            {popularBooks && popularBooks.length > 0 ? (
              popularBooks.map((book, index) => (
                <div
                  key={book._id || index}
                  className="mr-6 my-4 group cursor-pointer"
                >
                  {/* Custom Popular Book Card */}
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-2xl w-72 h-[26rem] relative flex flex-col">
                    {/* Book Cover Section */}
                    <div className="relative h-56 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center overflow-hidden flex-shrink-0">
                      <img
                        src={book.coverImg || "https://via.placeholder.com/200x280?text=No+Cover"}
                        alt={book.title}
                        className="h-48 w-32 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-110"
                      />
                      {/* Popular Badge */}
                      <div className="absolute top-3 right-3 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold shadow-md">
                        ⭐ Popular
                      </div>
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    {/* Book Info Section */}
                    <div className="p-4 flex-1 flex flex-col justify-between h-[10rem]">
                      <div className="flex-1 overflow-hidden">
                        <h3 className="font-bold text-lg text-gray-800 mb-2 leading-tight overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                          {book.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-1 truncate">
                          <span className="font-medium">Author:</span> {book.author}
                        </p>
                        <p className="text-gray-500 text-xs mb-3 truncate">
                          <span className="font-medium">Language:</span> {book.language}
                        </p>
                      </div>
                      
                      {/* Action Button */}
                      <div className="mt-auto pt-2">
                        <button
                          onClick={() => navigate(`/books/details/${book._id}`)}
                          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-2 px-4 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:translate-y-[-2px] shadow-lg hover:shadow-xl"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : isLoading ? (
              // Skeleton loading cards with new design
              [1, 2, 3, 4, 5, 6].map((_, index) => (
                <div
                  key={index}
                  className="mr-6 my-4"
                >
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-72 h-[26rem] flex flex-col">
                    {/* Skeleton Book Cover */}
                    <div className="h-56 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center relative flex-shrink-0">
                      <div className="animate-pulse">
                        <div className="h-48 w-32 bg-gray-300 rounded-lg"></div>
                      </div>
                      {/* Skeleton Badge */}
                      <div className="absolute top-3 right-3 bg-gray-300 px-3 py-1 rounded-full">
                        <div className="w-12 h-3 bg-gray-400 rounded animate-pulse"></div>
                      </div>
                    </div>
                    
                    {/* Skeleton Info Section */}
                    <div className="p-4 flex-1 flex flex-col justify-between h-[10rem]">
                      <div className="animate-pulse flex-1 overflow-hidden">
                        <div className="h-5 bg-gray-300 rounded w-4/5 mb-2"></div>
                        <div className="h-4 bg-gray-300 rounded w-3/5 mb-1"></div>
                        <div className="h-3 bg-gray-300 rounded w-2/5 mb-3"></div>
                      </div>
                      
                      {/* Skeleton Button */}
                      <div className="mt-auto pt-2">
                        <div className="w-full h-8 bg-gray-300 rounded-lg animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              // No books found
              <div className="w-full text-center py-8">
                <p className="text-gray-600 font-semibold">No popular books found</p>
              </div>
            )}
          </Marquee>
        )}
        {/* Decorative Background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg shadow-inner"></div>
      </div>
    </div>
  );
};

export default MostPopular;
