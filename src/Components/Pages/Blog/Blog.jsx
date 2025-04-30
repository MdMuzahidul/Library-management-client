import books from "../../../assets/books.jpg";

const Blog = () => {
  return (
    <div>
      <section className="max-w-7xl mx-auto py-12 px-4 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3,4].map((post) => (
          <article
            key={post}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={books}
              alt="Blog thumbnail"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">
                Blog Post Title {post}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero.
              </p>
              <a
                href="#"
                className="text-[#1A237E] font-semibold hover:underline"
              >
               Read more →
              </a>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Blog;
