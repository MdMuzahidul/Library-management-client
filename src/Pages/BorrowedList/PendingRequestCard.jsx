import React, { useEffect, useState } from "react";

const PendingRequestCard = ({ request }) => {
  const [book, setBook] = useState(null);
  const bookTitle = request.bookTitle || request.book?.bookTitle || "";
  const status = request.status || "";
  const borrowDate = request.borrowDate || request.date || "";

  useEffect(() => {
    fetch(`http://localhost:5000/books/${request.bookId}`)
      .then((response) => response.json())
      .then((data) => {
        setBook(data);
      });
  }, [request.bookId]);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6 border border-gray-100 hover:shadow-2xl transition flex flex-col md:flex-row gap-6 items-center">
      <div className="w-full md:w-32 flex-shrink-0 flex items-center justify-center">
        <img
          src={book?.coverImg || "/src/assets/Book1.jpg"}
          alt={bookTitle}
          className="w-24 h-32 object-cover rounded-md border border-gray-200 shadow-sm bg-gray-50"
        />
      </div>
      <div className="flex-1 flex flex-col gap-2 w-full">
        <h4 className="text-xl font-bold text-green-700 mb-1">{bookTitle}</h4>
        {book?.author && (
          <p className="text-gray-500 text-sm mb-1">by {book.author}</p>
        )}
        <div className="flex items-center gap-3 mt-2">
          {status && (
            <span className="text-xs px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 uppercase tracking-wide font-semibold">
              {status}
            </span>
          )}
          {borrowDate && (
            <span className="text-gray-400 text-xs">
              Requested on: {new Date(borrowDate).toLocaleDateString()}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default PendingRequestCard;
