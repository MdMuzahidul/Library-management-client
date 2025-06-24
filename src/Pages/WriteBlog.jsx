import React, { useState } from "react";

const WriteBlog = () => {
  const [form, setForm] = useState({
    title: "",
    bookTitle: "",
    author: "",
    department: "",
    studentId: "",
    introduction: "",
    content: "",
    conclusion: "",
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Helper to count words
  const wordCount = (text) => text.trim().split(/\s+/).filter(Boolean).length;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    if (
      !form.title ||
      !form.bookTitle ||
      !form.author ||
      !form.department ||
      !form.studentId ||
      !form.introduction ||
      !form.content ||
      !form.conclusion
    ) {
      setError("Please fill in all fields.");
      return;
    }
    if (wordCount(form.introduction) > 60) {
      setError("Introduction must be less than 60 words.");
      return;
    }
    if (wordCount(form.conclusion) > 60) {
      setError("Conclusion must be less than 60 words.");
      return;
    }
    try {
      const res = await fetch("http://localhost:5000/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, date: new Date().toISOString() }),
      });
      if (!res.ok) throw new Error("Failed to submit blog");
      setSuccess(true);
      setForm({
        title: "",
        bookTitle: "",
        author: "",
        department: "",
        studentId: "",
        introduction: "",
        content: "",
        conclusion: "",
      });
    } catch {
      setError("Failed to submit blog. Please try again.");
    }
  };
  console.log("Form Data:", form);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center py-10 px-2">
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center flex items-center justify-center gap-2">
          <svg
            className="w-8 h-8 text-green-500"
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
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Blog Title
            </label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your blog title"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Book Title
            </label>
            <input
              type="text"
              name="bookTitle"
              value={form.bookTitle}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Which book is this blog about?"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Your Name
            </label>
            <input
              type="text"
              name="author"
              value={form.author}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Department Name
            </label>
            <input
              type="text"
              name="department"
              value={form.department}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your department name"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Student ID
            </label>
            <input
              type="text"
              name="studentId"
              value={form.studentId}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your student ID"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Introduction
            </label>
            <textarea
              name="introduction"
              value={form.introduction}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
              placeholder="Write an introduction for your blog... (max 60 words)"
              maxLength={500}
            ></textarea>
            <div className="text-xs text-gray-400 text-right">
              {wordCount(form.introduction)} / 60 words
            </div>
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Blog Content
            </label>
            <textarea
              name="content"
              value={form.content}
              onChange={handleChange}
              rows={7}
              className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
              placeholder="Write your blog here..."
            ></textarea>
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Conclusion
            </label>
            <textarea
              name="conclusion"
              value={form.conclusion}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
              placeholder="Write a conclusion for your blog... (max 60 words)"
              maxLength={500}
            ></textarea>
            <div className="text-xs text-gray-400 text-right">
              {wordCount(form.conclusion)} / 60 words
            </div>
          </div>
          {error && <div className="text-red-600 text-sm">{error}</div>}
          {success && (
            <div className="text-green-600 text-sm">
              Blog submitted successfully!
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow transition text-lg flex items-center justify-center gap-2"
          >
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
            Submit Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default WriteBlog;
