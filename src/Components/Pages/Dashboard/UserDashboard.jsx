import React from "react";
import Header from "../../Header/Header";

const UserDashboard = () => {
  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Welcome,</h1>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <div className="bg-white shadow-lg rounded-2xl p-6 flex items-center gap-4">
              <div>
                <h2 className="text-xl font-semibold">Borrowed Books</h2>
                <p className="text-gray-600">asdjhkfjkshdfk</p>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-2xl p-6 flex items-center gap-4">
              <div>
                <h2 className="text-xl font-semibold">Wishlist</h2>
                <p className="text-gray-600">jksdhf</p>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-2xl p-6 flex items-center gap-4">
              <div>
                <h2 className="text-xl font-semibold">Reading Progress</h2>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                  <div
                    className="bg-purple-600 h-2.5 rounded-full"
                    // style={{ width: `${user.readingProgress}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  {/* {user.readingProgress}% completed */}
                  lksdfja
                </p>
              </div>
            </div>
          </div>

          {/* Recent Activity Section */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Recent Activity</h2>
            <ul className="space-y-3 text-gray-700">
              <li> Borrowed "The Great Gatsby"</li>
              <li> Rated "1984" with 4 stars</li>
              <li> Added "Dune" to wishlist</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
