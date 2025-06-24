import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import BookCard from "../../Components/Books/BookCard";
import { AuthContext } from "../../UseContext/AuthProvider";

const BooksDetails = () => {
  const singleBook = useLoaderData();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [borrowed, setBorrowed] = useState(false);
  const [error, setError] = useState("");
  const userData = JSON.parse(localStorage.getItem("user")) || null;
  console.log("User Data:", userData);

  // Check if the user has already borrowed this book
  useEffect(() => {
    const checkBorrowed = async () => {
      if (!user) return;
      try {
        const res = await fetch(
          `http://localhost:5000/borrowed?bookId=${
            singleBook._id || singleBook.id
          }&email=${user.email}`
        );
        const data = await res.json();
        if (data?.borrowed) setBorrowed(true);
      } catch (e) {
        // Optionally handle error
        console.error("Error checking borrowed status:", e);
        setError("Failed to check borrowed status.");
      }
    };
    checkBorrowed();
  }, [singleBook, user]);

  const handleBorrow = async () => {
    setError("");
    if (!user) {
      setError("You must be logged in to borrow a book.");
      return;
    }
    try {
      const borrowData = {
        email: user.email,
        bookId: singleBook._id || singleBook.id,
        bookTitle: singleBook.title,
        borrowerName: userData.name || user.name,
        department: userData.department || "Unknown",
        studentId: userData.studentId || "Unknown",
        status: "pending",
        borrowDate: new Date().toISOString(),
      };
      const res = await fetch("http://localhost:5000/borrowed", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(borrowData),
      });
      if (!res.ok) throw new Error("Failed to borrow book");
      setBorrowed(true);
      setTimeout(() => setBorrowed(false), 2000);
    } catch {
      setError("The books is already borrowed by you ");
    }
  };
  console.log(user?.name);

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

  if (!singleBook) return <p>Book not found</p>;
  return (
    <div className="flex flex-col md:flex-row bg-gray-50 min-h-screen w-full md:w-11/12 mx-auto">
      <div className="w-full md:max-w-4xl mx-auto py-8 space-y-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={coverImg}
            alt={title}
            className="w-full max-w-xs md:w-60 rounded shadow mx-auto md:mx-0"
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
              <button
                className={`bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition ${
                  borrowed ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={handleBorrow}
                disabled={borrowed}
              >
                {borrowed ? "Already Borrowed" : "BORROW BOOK"}
              </button>
            </div>
            {borrowed && (
              <p className="text-green-600 text-sm mt-2">
                You have already borrowed this book.
              </p>
            )}
            {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
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
        {/* blog writing */}
        <div className="border-t border-gray-300 my-8"></div>
        <div className="bg-gradient-to-br from-green-100 to-blue-50 p-8 rounded-2xl shadow-lg flex flex-col items-center w-full max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-2 flex items-center gap-2">
            <svg
              className="w-7 h-7 text-blue-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19.5 3 21l1.5-4L16.5 3.5z"
              />
            </svg>
            Write a Blog
          </h2>
          <p className="text-gray-700 text-center mb-4 text-base md:text-lg max-w-xl">
            Do you want to share your thoughts or review about{" "}
            <span className="font-semibold text-blue-700">{title}</span>?
            Inspire others by writing a blog post!
          </p>
          <Link to='/writeblog'>
            <button className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold shadow-md transition flex items-center gap-2 text-base">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Write Blog
            </button>
          </Link>
        </div>
        <button
          className="mb-4 px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition w-fit"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>
      </div>

      {/* Sidebar for Recommended Books */}
      <aside className="w-full md:w-80 min-w-0 max-w-full md:max-w-80 p-4 md:p-6 bg-white shadow-lg rounded-lg mt-8 md:mt-20 ml-0 md:ml-auto flex flex-col items-center h-fit self-start">
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
