import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Library Info */}
        <div>
          <h2 className="text-xl font-bold text-white">📚 Smart Library</h2>
          <p className="mt-2 text-sm">
            A digital solution to manage your library efficiently. Borrow,
            return, and explore books with ease.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="/books" className="hover:underline">
                Browse Books
              </a>
            </li>
            <li>
              <a href="/account" className="hover:underline">
                My Account
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                About Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Contact</h3>
          <p className="text-sm">📍 123 Library Lane, Booktown</p>
          <p className="text-sm">📧 info@smartlibrary.com</p>
          <p className="text-sm">📞 +880 1234-567890</p>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Smart Library. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
