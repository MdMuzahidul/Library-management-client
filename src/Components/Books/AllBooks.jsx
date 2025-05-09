import React, { useState } from "react";

const BookCard = ({ title, author, cover }) => (
  <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow border border-gray-200 overflow-hidden transform hover:scale-105 transition-transform duration-300">
    {/* Book Cover */}
    <div className="w-full h-64">
      <img
        src={cover}
        alt={`${title} Cover`}
        className="w-full h-full object-cover"
      />
    </div>
    {/* Book Details */}
    <div className="p-4">
      <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">Author: {author}</p>
    </div>
  </div>
);

const books = [
  {
    title: "Bengali Literature",
    author: "Humayun Ahmed",
    category: "Literature",
    cover: "https://i.ibb.co.com/Zzb3pdmj/Book1.jpg",
  },
  {
    title: "General Chemistry",
    author: "Raymond Chang",
    category: "Science",
    cover: "https://i.ibb.co.com/Zzb3pdmj/Book1.jpg",
  },
  {
    title: "Introduction to Algorithms",
    author: "Thomas H. Cormen",
    category: "Technology",
    cover: "https://i.ibb.co.com/Zzb3pdmj/Book1.jpg",
  },
  {
    title: "History of Islam",
    author: "Maulana Akram",
    category: "Religion",
    cover: "https://i.ibb.co.com/Zzb3pdmj/Book1.jpg",
  },
  {
    title: "Microeconomics",
    author: "Paul Krugman",
    category: "Economics",
    cover: "https://i.ibb.co.com/Zzb3pdmj/Book1.jpg",
  },
  {
    title: "The Psychology of Learning",
    author: "B.F. Skinner",
    category: "Psychology",
    cover: "https://i.ibb.co.com/Zzb3pdmj/Book1.jpg",
  },
];

// Group books by category
const groupedBooks = books.reduce((acc, book) => {
  acc[book.category] = acc[book.category] || [];
  acc[book.category].push(book);
  return acc;
}, {});

export default function AllBooks() {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const handleSeeAll = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen p-8">
      <div className="w-11/12 mx-auto">
        <h2 className="text-5xl font-extrabold text-center text-blue-700 mb-12">
          Explore Our Library Collection
        </h2>
        {Object.keys(groupedBooks).map((category) => {
          // Show only the expanded category or all categories if none is expanded
          if (expandedCategory && expandedCategory !== category) {
            return null;
          }

          return (
            <div key={category} className="mb-16">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-3xl font-semibold text-gray-800">
                  {category}
                </h3>
                <button
                  onClick={() => handleSeeAll(category)}
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  {expandedCategory === category
                    ? "Show All Categories"
                    : "See More"}
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {groupedBooks[category].map((book, index) => (
                  <BookCard key={index} {...book} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
