import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../UseContext/AuthProvider";
import { HendleContext } from "../../UseContext/HendleProvider";
import RecommendBookCard from "../../Components/RecommededComponent/RecommendBookCard";

const BooksDetails = () => {
  const singleBook = useLoaderData();
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);
  const { currentUser } = useContext(HendleContext);

  const [borrowed, setBorrowed] = useState(false);
  const [error, setError] = useState("");
  const [recommendedBooks, setRecommendedBooks] = useState([]);

  // Check if the user has already borrowed this book
  useEffect(() => {
    if (!user) return; // Prevent running if user is not loaded
    const checkBorrowed = async () => {
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

  // Fetch recommended books by ISBN
  useEffect(() => {
    if (!singleBook?.isbn) return;
    setRecommendedBooks([]); // Clear previous recommendations while loading new ones
    fetch(`http://127.0.0.1:5000/recommend?isbn=${singleBook.isbn}`)
      .then((res) => res.json())
      .then(async (data) => {
        if (Array.isArray(data.recommendations)) {
          const bookDetails = await Promise.all(
            data.recommendations.map(async (rec) => {
              const res = await fetch(
                `http://localhost:5000/books/isbn/${rec.isbn}`
              );
              return res.json();
            })
          );
          setRecommendedBooks(bookDetails);
        } else {
          setRecommendedBooks([]);
        }
      })
      .catch((err) => {
        setRecommendedBooks([]);
        console.error("Error fetching recommendations:", err);
      });
  }, [singleBook?.isbn]);
  console.log("Recommended Books:", recommendedBooks);

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
        borrowerName: currentUser.name,
        department: currentUser.department || "Unknown",
        studentId: currentUser.studentId || "Unknown",
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
    } catch (e) {
      setError("The book is already borrowed by you");
      console.error("Error borrowing book:", e);
    }
  };

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
  } = singleBook;

  if (!singleBook) return <p>Book not found</p>;
  // If user is not loaded yet, show loading instead of rendering or redirecting
  if (user === undefined) {
    return <div className="text-center py-10">Loading...</div>;
  }
  return (
    <div className="flex flex-col md:flex-row bg-gradient-to-br from-blue-50 to-green-100 min-h-screen w-full md:w-11/12 mx-auto">
      <div className="w-full md:max-w-4xl mx-auto py-10 px-4 md:px-8 space-y-8 bg-white rounded-2xl shadow-xl mt-8 mb-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <img
            src={coverImg}
            alt={title}
            className="w-60 h-80 object-cover rounded-xl shadow-lg border-4 border-green-200 bg-white"
          />
          <div className="flex-1 space-y-3">
            <h1 className="text-4xl font-extrabold text-green-800 mb-2">
              {title}
            </h1>
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                {language || "Unknown Language"}
              </span>
              <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-semibold">
                {publisher || "Unknown Publisher"}
              </span>
              <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold">
                {publishDate || "Unknown Date"}
              </span>
            </div>
            <p className="text-lg text-gray-700 italic">
              By <span className="text-green-700 font-semibold">{author}</span>
            </p>
            {/* Ratings */}
            <div className="flex items-center gap-1 mt-2">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={
                    i < Math.round(Number(rating))
                      ? "text-yellow-400 text-xl"
                      : "text-gray-300 text-xl"
                  }
                >
                  ★
                </span>
              ))}
              <span className="text-gray-600 ml-2 text-sm font-medium">
                {rating ? `${rating}/5` : "No rating"}
              </span>
            </div>
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-2">
              {Array.isArray(genres)
                ? genres.map((genre, idx) => (
                    <span
                      key={idx}
                      className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {genre}
                    </span>
                  ))
                : genres}
            </div>
            {/* Borrow Button */}
            <div className="flex gap-4 mt-6">
              <button
                className={`bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-2 rounded-full font-bold shadow-lg hover:from-green-600 hover:to-blue-600 transition-all duration-200 ${
                  borrowed ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={handleBorrow}
                disabled={borrowed || currentUser?.role !== "student"}
              >
                {borrowed
                  ? "Already Borrowed"
                  : currentUser?.role !== "student"
                  ? "Only students can borrow"
                  : "BORROW BOOK"}
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

        {/* Description */}
        <div className="space-y-4 text-gray-800 text-justify leading-relaxed bg-blue-50 rounded-xl p-6 shadow-inner">
          <h2 className="text-2xl font-bold text-green-700 mb-2">
            Description
          </h2>
          <p>{description || "No description available."}</p>
        </div>

        {/* Blog Writing Call-to-Action */}
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
          <Link to="/writeblog">
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
      <aside className="w-full md:w-[420px] min-w-0 max-w-full md:max-w-[420px] p-6 bg-white shadow-lg rounded-2xl mt-8 md:mt-20 ml-0 md:ml-auto flex flex-col items-center h-fit self-start border border-green-100">
        <h3 className="text-2xl font-bold mb-6 text-green-700">
          Recommended Books
        </h3>
        <div className="space-y-4 w-full">
          {recommendedBooks.length > 0 ? (
            recommendedBooks.map((book, idx) => (
              <RecommendBookCard key={idx} book={book} />
            ))
          ) : (
            <div className="text-gray-400 text-center py-8">
              No recommendations found.
            </div>
          )}
        </div>
      </aside>
    </div>
  );
};

export default BooksDetails;
