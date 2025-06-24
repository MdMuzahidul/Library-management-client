import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Library Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            📚 Amor 21 Library
          </h2>
          <p className="text-sm leading-relaxed">
            A digital solution to manage your library efficiently. Borrow,
            return, and explore books with ease. Join us to discover a world of
            knowledge and inspiration.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/books" className="hover:text-yellow-400 transition">
                Browse Books
              </a>
            </li>
            <li>
              <a href="/account" className="hover:text-yellow-400 transition">
                My Account
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-yellow-400 transition">
                Contact
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-yellow-400 transition">
                About Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <p className="text-sm mb-2">📍 123 Library Lane, BSMRSTU</p>
          <p className="text-sm mb-2">📧 muzahid.19cse063@bsmrstu.edu.bd</p>
          <p className="text-sm">📞 +880 1521-551823</p>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="mt-8 text-center">
        <div className="flex justify-center space-x-6">
          <a
            href="#"
            className="text-gray-400 hover:text-yellow-400 transition"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-yellow-400 transition"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-yellow-400 transition"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-yellow-400 transition"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm text-gray-500 mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Amor 21 Library. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
