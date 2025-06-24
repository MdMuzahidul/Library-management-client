import React from "react";

const AppeovedCard = ({req}) => {
  return (
    <div>
      <li
        key={req._id || req.id}
        className="flex flex-col md:flex-row md:items-center gap-2 py-6 px-2 hover:bg-green-50 rounded-lg transition"
      >
        <div className="flex-1">
          <p className="font-semibold text-lg text-green-800">
            {req.bookTitle}
          </p>
          <p className="text-gray-600 text-sm">User: {req.email}</p>
          <p className="text-gray-600 text-sm">
            Department: {req.department || "N/A"}
          </p>
          <p className="text-gray-600 text-sm">
            Student Id: {req.studentId || "N/A"}
          </p>
          {req.approvedDate && (
            <p className="text-gray-400 text-xs mt-1">
              Approved on: {new Date(req.approvedDate).toLocaleDateString()}
            </p>
          )}
        </div>
        <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-xs font-semibold">
          Approved
        </span>
      </li>
    </div>
  );
};

export default AppeovedCard;
