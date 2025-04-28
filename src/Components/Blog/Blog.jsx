import React, { useState } from "react";

const Blog = ({ onAddBlog, blogs }) => {
  const [blogContent, setBlogContent] = useState("");

  const handleAddBlog = () => {
    if (blogContent.trim()) {
      onAddBlog(blogContent);
      setBlogContent("");
    }
  };

  return (
    <div className="p-4">
      <h3 className="text-lg font-bold mb-2">Write a Blog</h3>
      <textarea
        value={blogContent}
        onChange={(e) => setBlogContent(e.target.value)}
        placeholder="Write your thoughts about a book..."
        className="w-full p-2 border rounded mb-2"
      ></textarea>
      <button
        onClick={handleAddBlog}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Add Blog
      </button>
      <div className="mt-4">
        <h3 className="text-lg font-bold mb-2">Blogs</h3>
        {blogs?.length > 0 ? (
          blogs.map((blog, index) => (
            <div key={index} className="p-2 border rounded mb-2">
              {blog}
            </div>
          ))
        ) : (
          <p>No blogs available.</p>
        )}
      </div>
    </div>
  );
};

export default Blog;