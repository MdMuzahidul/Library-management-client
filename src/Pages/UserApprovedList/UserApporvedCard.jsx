import React, { useEffect, useState } from "react";

const UserApprovedCard = ({ book }) => {
  const [singleBook, setSingleBook] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:5000/books/${book.bookId}`)
      .then((response) => response.json())
      .then((data) => {
        setSingleBook(data);
      });
  }, [book.bookId]);

  // Prefer singleBook data if available, fallback to book prop
  const coverImg =
    singleBook?.coverImg || book.coverImg || "/src/assets/Book1.jpg";
  const title = singleBook?.title || book.bookTitle;
  const author = singleBook?.author || book.author;
  const approvedDate = book.approvedDate;
  const returnDate = book.returnDate;

  return (
    <li className="flex flex-col md:flex-row items-center gap-4 py-5 px-4 bg-white border border-green-100 rounded-xl shadow-md hover:shadow-lg transition mb-4">
      <div className="w-16 h-20 rounded-md bg-green-100 flex items-center justify-center overflow-hidden flex-shrink-0 border-2 border-green-200">
        <img
          src={coverImg}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex-1 w-full">
        <div className="font-bold text-green-800 text-lg mb-1">{title}</div>
        <div className="text-gray-500 text-sm mb-2">{author}</div>
        <div className="flex flex-wrap gap-2 mb-1">
          {approvedDate && (
            <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-medium">
              Approved on: {new Date(approvedDate).toLocaleDateString()}
            </span>
          )}
          {returnDate && (
            <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded-full text-xs font-medium">
              Return Date: {new Date(returnDate).toLocaleDateString()}
            </span>
          )}
        </div>
      </div>
      <span className="bg-green-200 text-green-800 px-5 py-2 rounded-full text-sm font-bold shadow-sm mt-4 md:mt-0">
        Approved
      </span>
    </li>
  );
};

export default UserApprovedCard;
