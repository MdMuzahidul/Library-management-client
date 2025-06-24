import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../UseContext/AuthProvider";
import UserApprovedCard from "./UserApporvedCard";

const UserApprovedList = () => {
  const [booksList, setBooksList] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/user/approvedbooks/${user?.email}`)
      .then((response) => response.json())
      .then((data) => {
        setBooksList(data);
      });
  }, [user?.email]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex flex-col items-center py-10 px-2 md:px-0">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-green-700 text-center">
          Approved Books{" "}
          <span className="ml-2 text-3xl text-gray-500">
            ({booksList.length})
          </span>
        </h1>
        <ul className="divide-y divide-gray-200">
          {booksList.length > 0 ? (
            booksList.map((book) => (
              <UserApprovedCard key={book.id || book._id} book={book} />
            ))
          ) : (
            <li className="text-gray-500 py-8 text-center">
              No approved books found.
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default UserApprovedList;
