import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-6">
        Oops! The page you are looking for does not exist or has been moved.
      </p>
      <div className="flex gap-4">
        <button
          onClick={handleGoBack}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
        >
          Go Back
        </button>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-2 bg-gray-300 text-gray-800 rounded-lg shadow hover:bg-gray-400 transition"
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
