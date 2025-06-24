import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ post }) => {
  return (
    <article className="bg-white rounded-2xl shadow-lg border border-blue-100 hover:shadow-2xl transition p-6 flex flex-col gap-3 h-full">
      <h3
        className="text-2xl font-bold text-blue-800 mb-1 truncate"
        title={post.title}
      >
        {post.title}
      </h3>
      <div className="flex flex-col mb-2">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500 font-medium">By</span>
          <span className="text-sm text-green-700 font-semibold">
            {post.author}
          </span>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full text-xs font-semibold">
            {post.department || "General"}
          </span>
          <span className="bg-yellow-50 text-yellow-700 px-2 py-0.5 rounded-full text-xs font-semibold">
            {post.studentId || "No ID"}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
        <svg
          className="w-4 h-4 text-blue-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z"
          />
        </svg>
        <span>
          {post.date
            ? new Date(post.date).toLocaleDateString()
            : "No date available."}
        </span>
      </div>
      <p className="text-gray-700 text-base mb-4 line-clamp-3">
        {post.introduction || "No introduction available."}
      </p>
      <div className="mt-auto">
        <Link
          to={`/blog/details/${post._id}`}
          className="inline-block text-white bg-blue-600 hover:bg-blue-700 font-semibold px-4 py-2 rounded-full shadow transition text-sm"
        >
          Read more
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
