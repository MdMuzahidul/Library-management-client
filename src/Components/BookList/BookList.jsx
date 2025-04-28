import React, { useState } from "react";

const BookList = ({ books, onBorrow }) => {
  return (
    <div className="p-4">
      <h3 className="text-lg font-bold mb-2">Book List</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {books.map((book) => (
          <div key={book.id} className="p-4 border rounded shadow">
            <h4 className="font-bold">{book.title}</h4>
            <p>Author: {book.author}</p>
            <p>Genre: {book.genre}</p>
            <p>Status: {book.available ? "Available" : "Borrowed"}</p>
            <button
              onClick={() => onBorrow(book.id)}
              disabled={!book.available}
              className={`mt-2 p-2 rounded ${
                book.available ? "bg-green-500 text-white" : "bg-gray-300"
              }`}
            >
              {book.available ? "Borrow" : "Unavailable"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;