import React, { useEffect, useState } from "react";

const Recommendations = ({ userActivity, books }) => {
  const [recommendedBooks, setRecommendedBooks] = useState([]);

  useEffect(() => {
    // Simple recommendation logic based on user activity
    const recommendations = books.filter((book) => {
      return (
        userActivity.searchTerms.some((term) =>
          book.title.toLowerCase().includes(term.toLowerCase())
        ) ||
        userActivity.borrowedBooks.includes(book.id) ||
        userActivity.browsedGenres.includes(book.genre)
      );
    });
    setRecommendedBooks(recommendations);
  }, [userActivity, books]);

  return (
    <div className="p-4">
      <h3 className="text-lg font-bold mb-2">Recommended Books</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recommendedBooks.length > 0 ? (
          recommendedBooks.map((book) => (
            <div key={book.id} className="p-4 border rounded shadow">
              <h4 className="font-bold">{book.title}</h4>
              <p>Author: {book.author}</p>
              <p>Genre: {book.genre}</p>
            </div>
          ))
        ) : (
          <p>No recommendations available.</p>
        )}
      </div>
    </div>
  );
};

export default Recommendations;