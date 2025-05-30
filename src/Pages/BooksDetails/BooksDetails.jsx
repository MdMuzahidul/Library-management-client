import React from "react";
import { useLoaderData } from "react-router-dom";
import BookCard from "../../Components/Books/BookCard";

const BooksDetails = () => {
  const singleBook = useLoaderData();
  const {
    coverImg,
    title,
    author,
    language,
    publishDate,
    genres,
    publisher,
    description,
    rating,
    likedPercent,
  } = singleBook;
  console.log(genres);
  if (!singleBook) return <p>Book not found</p>;
  return (
    <div className="flex bg-gray-50 min-h-screen w-11/12 mx-auto">
      <div className="max-w-4xl mx-auto py-8 space-y-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={coverImg}
            alt="We Are Voulhire"
            className="w-full md:w-60 rounded shadow"
          />
          <div className="flex-1 space-y-2">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="text-lg text-gray-600 italic">
              {language ? `Language: ${language}` : "Language not specified"}
            </p>
            <p className="text-sm text-gray-500">
              By <span className="text-green-600 font-semibold">{author}</span>
            </p>
            <p className="text-lg text-gray-600 italic">
              {publisher
                ? `Publisher: ${publisher}`
                : "Publisher not specified"}
            </p>
            <p className="text-sm text-gray-500">
              Published on:{" "}
              <span className="text-green-600">{publishDate || "Unknown"}</span>
            </p>

            {/* Ratings */}
            <div className="flex items-center space-x-1 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <span key={i}>☆</span>
              ))}
              <span className="text-gray-600 ml-2">(0 Reviews)</span>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-4">
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
                Free Download
              </button>
              <button className="border border-gray-400 text-gray-700 px-4 py-2 rounded hover:bg-gray-100 transition">
                Read Online
              </button>
            </div>

            <p className="text-xs text-gray-500 mt-1">
              Available in the library
            </p>
          </div>
        </div>

        {/* Metadata */}
        <div className="flex gap-10 text-sm text-gray-700">
          <div>
            <strong>Rating:</strong> {rating || "Unknown"}
          </div>
          <div>
            <strong>Like</strong> {likedPercent || "0"}%
          </div>
        </div>
        <div className="border-t border-gray-300"></div>
        {/* Tag */}
        <div className="inline-block text-green-700 rounded-full text-sm font-medium">
          <span className="font-semibold">Tags:</span>{" "}
          {Array.isArray(genres)
            ? genres.map((genre, idx) => (
                <span
                  key={idx}
                  className="bg-green-200 text-green-800 px-2 py-0.5 rounded mr-2 mb-1 inline-block"
                >
                  {genre}
                </span>
              ))
            : genres}
        </div>

        {/* Description */}
        <div className="space-y-4 text-gray-800 text-justify leading-relaxed">
          <h2 className="text-2xl font-semibold">Description</h2>
          <p>{description || "No description available."}</p>
        </div>
      </div>
      {/* Sidebar for Recommended Books */}
      <aside className="w-80 min-w-72 max-w-80 p-6 bg-white shadow-lg  ml-auto flex flex-col h-fit">
        <h3 className="text-xl font-bold mb-4 text-green-700">
          Recommended Books
        </h3>
        <div className="space-y-4 w-full">
          {[1, 2, 3, 4, 5].map((_, idx) => (
            <div
              key={idx}
              className="card bg-green-50 border border-green-200 shadow-sm rounded-lg flex flex-row items-center p-3 gap-3 hover:shadow-md transition"
            >
              <div className="w-16 h-20 bg-gray-200 rounded overflow-hidden flex-shrink-0">
                <img
                  src="/src/assets/Book1.jpg"
                  alt="Book Cover"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-green-800 text-base">
                  Book Title {idx + 1}
                </h4>
                <p className="text-xs text-gray-500">by Author Name</p>
                <button className="mt-2 text-xs bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700 transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
};

export default BooksDetails;
