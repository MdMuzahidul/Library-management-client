import React from "react";

const Dashboard = ({ user }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">User Dashboard</h2>
      <div className="p-4 border rounded shadow bg-gray-100">
        <h3 className="text-lg font-bold">Welcome, {user.name}!</h3>
        <p>Email: {user.email}</p>
        <p>Membership: {user.membership}</p>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-bold mb-2">Your Activity</h3>
        <ul className="list-disc pl-6">
          <li>Books Borrowed: {user.activity.borrowedBooks.length}</li>
          <li>Blogs Written: {user.activity.blogsWritten}</li>
          <li>Genres Browsed: {user.activity.browsedGenres.join(", ")}</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;