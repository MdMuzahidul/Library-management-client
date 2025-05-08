import React, { useState } from "react";
import image from "../../../assets/Book1.jpg";

const BookDetailCard = () => {
  const [isBorrowed, setIsBorrowed] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);

  const handleBorrow = () => setIsBorrowed(true);
  const toggleReviewModal = () => setShowReviewModal(!showReviewModal);

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-6 space-y-6 border border-gray-200">
      {/* Top Section */}
      <div className="flex gap-6">
        <img
          src={image}
          alt="Book Cover"
          className="w-40 h-52 object-cover rounded-lg border"
        />
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-800">title</h2>
          <p className="text-gray-700">Total Books: 10</p>
          <p className="text-gray-700">Available: 7</p>
          <div className="mt-4 flex gap-3">
            <button
              onClick={handleBorrow}
              //   disabled={isBorrowed || book.available === 0}
              //   className={`px-4 py-2 rounded-lg text-white ${
              //     isBorrowed || book.available === 0
              //       ? "bg-gray-400 cursor-not-allowed"
              //       : "bg-green-600 hover:bg-green-700"
              //   }`}
            >
              {isBorrowed ? "Borrowed" : "Borrow Book"}
            </button>
            <button
              onClick={toggleReviewModal}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Add Review
            </button>
          </div>
        </div>
      </div>

      {/* Description */}
      <div>
        <h3 className="font-semibold text-gray-800 underline">Description:</h3>
        <p className="text-gray-700 mt-1">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
          ducimus accusamus beatae adipisci voluptatibus culpa, repellendus nisi
          architecto qui numquam similique nihil quam. Corrupti et distinctio
          similique? Nam, ullam laudantium.
        </p>
      </div>

      {/* Genres & Author */}
      <div className="space-y-1">
        <p className="text-gray-800">
          <span className="font-semibold underline">Genres:</span> science
          fiction, fantasy, adventure
        </p>
        <p className="text-gray-800">
          <span className="font-semibold underline">Author Name:</span> John Doe
        </p>
      </div>

      {/* Review Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full">
            <h3 className="text-lg font-semibold mb-2">Write a Review</h3>
            <textarea
              className="w-full h-24 p-2 border rounded mb-4"
              placeholder="Your review..."
            ></textarea>
            <div className="flex justify-end gap-2">
              <button
                onClick={toggleReviewModal}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDetailCard;
