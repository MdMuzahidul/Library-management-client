import { Link } from "react-router-dom";
import books from "../assets/books.jpg";

const Blog = () => {
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
      <section className="max-w-7xl mx-auto py-12 px-4 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((post) => (
          <article
            key={post}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={books}
              alt="Blog thumbnail"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                Blog Post Title {post}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </p>
              <Link
                to="/blog/details"
                className="text-blue-600 font-semibold hover:underline"
              >
                Read more →
              </Link>
            </div>
          </article>
        ))}
      </section>

      {/* Call to Action Section */}
      <div className="bg-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Want to stay updated with our latest posts?
          </h2>
          <p className="text-lg mb-6">
            Subscribe to our newsletter and never miss an update!
          </p>
          <button className="bg-yellow-400 text-blue-800 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-yellow-500 transition">
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
