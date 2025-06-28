import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BlogRecommend = ({ suggestion }) => {
  console.log("Suggestion received:", suggestion);
  console.log("Suggestion._id:", suggestion?._id);

  const [blogDetails, setBlogDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if suggestion and _id exist before making API call
    if (!suggestion || !suggestion._id) {
      console.log("No suggestion or _id found:", suggestion);
      setError("No suggestion ID available");
      return;
    }

    const fetchBlogDetails = async () => {
      try {
        setLoading(true);
        setError(null);

        console.log("Fetching blog details for ID:", suggestion._id);
        const response = await fetch(
          `http://localhost:5000/blog/book/${suggestion._id}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Blog details response:", data);
        setBlogDetails(data);
      } catch (err) {
        console.error("Error fetching blog details:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogDetails();
  }, [suggestion]);

  console.log("Current blogDetails:", blogDetails?._id);

  const handleCardClick = () => {
    if (suggestion?._id) {
      navigate(`/blog/details/${suggestion._id}`);
    }
  };

  // Show loading state
  if (loading) {
    return (
      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 animate-pulse mb-3">
        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 bg-gray-200 rounded-md"></div>
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-3 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="bg-red-50 rounded-lg p-4 shadow-sm border border-red-200 mb-3">
        <div className="flex items-center space-x-2">
          <svg
            className="w-5 h-5 text-red-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 9v2m0 4h.01"
            />
          </svg>
          <div>
            <p className="text-red-700 text-sm font-medium">
              Failed to load blog
            </p>
            {suggestion?.bookTitle && (
              <p className="text-red-600 text-xs">"{suggestion.bookTitle}"</p>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Show blog details if available
  if (blogDetails) {
    return (
      <div
        className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 cursor-pointer mb-3 hover:border-blue-300"
        onClick={handleCardClick}
      >
        {/* Title */}
        <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
          {blogDetails.title || suggestion?.bookTitle || "No Title Available"}
        </h4>

        {/* Author and Department - Enhanced */}
        <div className="space-y-2 mb-3">
          {blogDetails.author && (
            <div className="flex items-center space-x-2">
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span className="text-sm font-medium text-gray-700">
                {blogDetails.author}
              </span>
            </div>
          )}

          {blogDetails.department && (
            <div className="flex items-center space-x-2">
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              <span className="text-sm font-medium text-blue-600">
                {blogDetails.department}
              </span>
            </div>
          )}

          {blogDetails.date && (
            <div className="flex items-center space-x-2">
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0 2 2v12a2 2 0 0 0 2 2z"
                />
              </svg>
              <span className="text-sm text-gray-500">
                {new Date(blogDetails.date).toLocaleDateString()}
              </span>
            </div>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {blogDetails.category && (
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
              {blogDetails.category}
            </span>
          )}
          {blogDetails.studentId && (
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
              ID: {blogDetails.studentId}
            </span>
          )}
        </div>

        {/* Preview */}
        {blogDetails.introduction && (
          <p className="text-sm text-gray-600 line-clamp-2 mb-3">
            {blogDetails.introduction}
          </p>
        )}

        {/* Read More */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <span className="text-sm text-blue-600 font-medium">Read More</span>
          <svg
            className="w-4 h-4 text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    );
  }

  // Fallback state - show basic info from suggestion if blogDetails failed to load
  if (suggestion && suggestion.bookTitle) {
    return (
      <div className="bg-yellow-50 rounded-lg p-4 shadow-sm border border-yellow-200 mb-3">
        <h4 className="text-yellow-800 font-medium text-sm mb-1">
          {suggestion.bookTitle}
        </h4>
        <p className="text-yellow-600 text-xs">Limited information available</p>
      </div>
    );
  }

  // Final fallback if no data
  return (
    <div className="bg-gray-50 rounded-lg p-4 shadow-sm border border-gray-200 mb-3">
      <div className="text-center py-2">
        <svg
          className="w-8 h-8 text-gray-400 mx-auto mb-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        <p className="text-gray-500 text-sm">Blog unavailable</p>
      </div>
    </div>
  );
};

export default BlogRecommend;
