import React, { useEffect, useState } from "react";
import Header from "../Header/Header";

const BookList = () => {
  const [booklist, setBooklist] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 10;

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("../../../public/books_dataset.json");
        const data = await response.json();
        setBooklist(data);
      } catch (error) {
        console.error("Error fetching booklist:", error);
      }
    };
    fetchBooks();
  }, []);

  // Calculate the books to display on the current page
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = booklist.slice(indexOfFirstBook, indexOfLastBook);

  // Calculate total pages
  const totalPages = Math.ceil(booklist.length / booksPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Header></Header>
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">Book List</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentBooks.map((book) => (
            <div key={book.id} className="p-4 border rounded shadow">
              <h4 className="font-bold">{book.title}</h4>
              <p>Author: {book.author}</p>
              <p>Genre: {book.genre}</p>
              <p>Status: {book.available ? "Available" : "Borrowed"}</p>
              <button
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
        {/* Pagination Controls */}
        <div className="mt-4 flex justify-center items-center space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookList;
