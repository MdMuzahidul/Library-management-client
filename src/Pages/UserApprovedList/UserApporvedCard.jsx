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

  return (
    <li className="flex flex-col md:flex-row items-center gap-4 py-4 px-3 bg-white rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition mb-4">
      <div className="w-16 h-20 rounded-md bg-green-100 flex items-center justify-center overflow-hidden flex-shrink-0">
        <img
          src={coverImg}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex-1 w-full">
        <div className="font-semibold text-gray-800 text-lg mb-1">{title}</div>
        <div className="text-gray-500 text-sm mb-1">{author}</div>
        {approvedDate && (
          <div className="text-gray-400 text-xs mt-1">
            Approved on: {new Date(approvedDate).toLocaleDateString()}
          </div>
        )}
      </div>
      <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-xs font-semibold mt-2 md:mt-0">
        Approved
      </span>
    </li>
  );
};

export default UserApprovedCard;
