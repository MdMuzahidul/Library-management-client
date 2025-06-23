import React, { useEffect, useState } from "react";

const Allusers = () => {
    const [users, setUsers] = useState([]);
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
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex flex-col items-center py-10 px-2 md:px-0">
            <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">
                <h1 className="text-3xl font-bold mb-6 text-green-700 text-center">All Users</h1>
                <ul className="divide-y divide-gray-200">
                    {users.length > 0 ? (
                        users.map((user) => (
                            <li key={user.id || user._id} className="flex items-center gap-4 py-4">
                                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold text-lg">
                                    {user.name ? user.name.charAt(0).toUpperCase() : "U"}
                                </div>
                                <div className="flex-1">
                                    <div className="font-semibold text-gray-800">{user.name}</div>
                                    <div className="text-gray-500 text-sm">Email: {user.email}</div>
                                    <div className="text-gray-400 text-xs mt-1">Role: {user.role || 'User'}</div>
                                    {user.department && (
                                        <div className="text-gray-400 text-xs">Department: {user.department}</div>
                                    )}
                                    {user.studentId && (
                                        <div className="text-gray-400 text-xs">Student ID: {user.studentId}</div>
                                    )}
                                </div>
                            </li>
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
