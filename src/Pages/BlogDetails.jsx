import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const suggestions = [
  { id: 1, title: "First Post", img: "https://via.placeholder.com/40" },
  { id: 2, title: "Second Post", img: "https://via.placeholder.com/40" },
  { id: 3, title: "Another Title", img: "https://via.placeholder.com/40" },
];

export default function BlogDetails() {
  const singleBlog = useLoaderData();
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-green-100 py-10 px-2 flex flex-col items-center">
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-10">
        {/* Main Blog Card */}
        <div className="flex-1 bg-white shadow-xl rounded-3xl p-8 flex flex-col">
          <h1 className="text-4xl font-extrabold text-blue-800 mb-3 break-words leading-tight">
            {singleBlog.title}
          </h1>
          <div className="mb-6">
            <span className="text-green-700 font-semibold block mb-1">
              By {singleBlog.author}
            </span>
            <div className="flex flex-wrap items-center gap-3 mb-1 text-sm">
              {singleBlog.department && (
                <span className="flex items-center gap-1 bg-gradient-to-r from-green-200 to-green-400 text-green-900 px-3 py-1 rounded-lg text-xs font-bold shadow-sm border border-green-300">
                  <svg
                    className="w-4 h-4 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 17v-2a4 4 0 0 1 8 0v2"
                    />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  {singleBlog.department}
                </span>
              )}
              {singleBlog.studentId && (
                <span className="flex items-center gap-1 bg-gradient-to-r from-blue-200 to-blue-400 text-blue-900 px-3 py-1 rounded-lg text-xs font-bold shadow-sm border border-blue-300">
                  <svg
                    className="w-4 h-4 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 11c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 17v1a4 4 0 0 1-8 0v-1"
                    />
                  </svg>
                  {singleBlog.studentId}
                </span>
              )}
            </div>
            <div className="flex items-center gap-1 text-gray-400 text-sm">
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
              {singleBlog.date
                ? new Date(singleBlog.date).toLocaleDateString()
                : "No date"}
            </div>
          </div>
          <div className="mb-8">
            <section className="mb-6">
              <h2 className="text-2xl font-semibold text-blue-700 mb-2">
                Introduction
              </h2>
              <p className="text-gray-700 text-lg whitespace-pre-line bg-blue-50 rounded-lg p-4 shadow-sm">
                {singleBlog.introduction}
              </p>
            </section>
            <section className="mb-6">
              <h2 className="text-2xl font-semibold text-blue-700 mb-2">
                Blog Content
              </h2>
              <p className="text-gray-800 text-lg whitespace-pre-line bg-green-50 rounded-lg p-4 shadow-sm">
                {singleBlog.content}
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-blue-700 mb-2">
                Conclusion
              </h2>
              <p className="text-gray-700 text-lg whitespace-pre-line bg-yellow-50 rounded-lg p-4 shadow-sm">
                {singleBlog.conclusion}
              </p>
            </section>
          </div>
        </div>
        {/* Suggestions Sidebar */}
        <aside className="w-full md:w-80 bg-white p-6 rounded-2xl shadow-lg h-fit self-start flex flex-col">
          <h3 className="text-xl font-bold mb-4 text-green-700 border-b pb-2">
            Suggestions
          </h3>
          <div className="space-y-3">
            {suggestions.map((item) => (
              <div
                key={item.id}
                className="flex items-center space-x-3 bg-blue-50 p-3 rounded-lg shadow-sm hover:bg-blue-100 transition"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-10 h-10 rounded-md"
                />
                <span className="text-sm font-medium text-blue-900">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </aside>
      </div>
      <div className="flex w-full justify-center">
        <button
          className="mt-10 px-6 py-2 bg-blue-600 text-white rounded-full font-semibold shadow hover:bg-blue-700 transition text-lg"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>
      </div>
    </div>
  );
}
