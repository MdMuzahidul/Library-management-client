import React from "react";

const suggestions = [
  { id: 1, title: "First Post", img: "https://via.placeholder.com/40" },
  { id: 2, title: "Second Post", img: "https://via.placeholder.com/40" },
  { id: 3, title: "Another Title", img: "https://via.placeholder.com/40" },
];

export default function BlogDetails() {
  return (
    <div className="flex p-6 max-w-7xl mx-auto">
      {/* Main Blog Card */}
      <div className="flex-1 bg-white shadow-lg rounded-2xl p-6 mr-4">
        <h2 className="text-2xl font-bold mb-4">Blog Card</h2>
        <p>This is the main blog content.</p>
      </div>

      {/* Suggestions Sidebar */}
      <div className="w-1/3 bg-gray-50 p-4 rounded-2xl shadow-md">
        <h3 className="text-xl font-semibold mb-4 border-b pb-2">
          Suggestions
        </h3>
        <div className="space-y-3">
          {suggestions.map((item) => (
            <div
              key={item.id}
              className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-10 h-10 rounded-md"
              />
              <span className="text-sm font-medium">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
