import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlogCard from "./BlogCard";
import { AuthContext } from "../UseContext/AuthProvider";

const Blog = () => {
  const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching blog posts:", error));
  }, []);
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
          <p className="text-lg text-gray-200">
            Discover the latest updates, tips, and insights from our library.
          </p>
        </div>
      </header>

      {/* Blog Posts Section */}
      <div className="min-h-100vh bg-white py-12">
        {posts && posts.length > 0 ? (
          <section className="max-w-7xl mx-auto py-12 px-4 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </section>
        ) : (
          <p className="text-center text-gray-500 py-12">
            No blog posts available.
          </p>
        )}
      </div>

      {/* Call to Action Section - Only show if user is not logged in */}
      {!user && (
        <div className="bg-blue-600 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Want to stay updated with our latest posts?
            </h2>
            <p className="text-lg mb-6">
              Register your account to our newsletter and never miss an update!
            </p>
            <Link
              to="/registration"
              className="bg-yellow-400 text-blue-800 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-yellow-500 transition"
            >
              Register Now
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
