import React, { useEffect, useState } from "react";
import AllusersCard from "./AllusersCard";

const Allusers = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  // Filter users by student ID
  const filteredUsers = search
    ? users.filter(
        (user) =>
          user.studentId &&
          user.studentId.toLowerCase().includes(search.toLowerCase())
      )
    : users;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex flex-col items-center py-10 px-2 md:px-0">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-green-700 text-center">
          All Users
        </h1>
        <div className="mb-6 flex justify-center">
          <input
            type="text"
            placeholder="Search by Student ID..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-xs px-4 py-2 border border-green-200 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>
        <ul className="divide-y divide-gray-200">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <AllusersCard user={user} key={user.id || user._id} />
            ))
          ) : (
            <li className="text-gray-500 py-8 text-center">No users found.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Allusers;
