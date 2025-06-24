import React, { useEffect, useState } from "react";
import { AuthContext } from "../../UseContext/AuthProvider";

const AllusersCard = ({ user }) => {
  const [borrowCount, setBorrowCount] = useState(0);

  //fetch all borrowed books of user
  useEffect(() => {
    if (!user?.email) return;
    fetch(`http://localhost:5000/user/approvedbooks/${user.email}`)
      .then((response) => response.json())
      .then((data) => {
        setBorrowCount(Array.isArray(data) ? data.length : 0);
      })
      .catch(() => {
        setBorrowCount(0);
      });
  }, [user?.email]);

  return (
    <li className="flex flex-col md:flex-row items-center gap-6 py-6 px-6 bg-white rounded-2xl shadow-lg border border-blue-100 hover:shadow-2xl transition mb-4">
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-200 to-blue-200 flex items-center justify-center text-green-700 font-extrabold text-2xl shadow-md">
        {user.name ? user.name.charAt(0).toUpperCase() : "U"}
      </div>
      <div className="flex-1 w-full">
        <div className="font-bold text-gray-800 text-xl mb-1">{user.name}</div>
        <div className="text-gray-500 text-base mb-2">{user.email}</div>
        <div className="flex flex-wrap gap-3 mb-2">
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
            {user.role || "User"}
          </span>
          {user.department && (
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
              Dept: {user.department}
            </span>
          )}
          {user.studentId && (
            <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-semibold">
              ID: {user.studentId}
            </span>
          )}
        </div>
        <div className="flex items-center justify-between gap-2 text-blue-600 text-base pt-2 font-semibold">
          <div>
            <span>Borrowed Books:</span>
            <span className="text-base text-blue-800 font-bold">
              {borrowCount}
            </span>
          </div>
          <button className="btn bg-blue-500 border-0">Show All</button>
        </div>
      </div>
    </li>
  );
};

export default AllusersCard;
