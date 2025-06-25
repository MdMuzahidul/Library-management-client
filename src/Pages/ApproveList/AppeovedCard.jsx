import React from "react";

const AppeovedCard = ({ req }) => {
  return (
    <div className="w-full">
      <li
        key={req._id || req.id}
        className="flex flex-col md:flex-row md:items-center gap-4 py-6 px-4 bg-white border border-green-100 shadow-md hover:shadow-lg hover:bg-green-50 rounded-xl transition mb-4"
      >
        <div className="flex-1">
          <p className="font-semibold text-xl text-green-800 mb-1">
            {req.bookTitle}
          </p>
          <div className="flex flex-wrap gap-2 mb-1">
            <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs font-medium">
              User: {req.email}
            </span>
            <span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full text-xs font-medium">
              Department: {req.department || "N/A"}
            </span>
            <span className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full text-xs font-medium">
              Student Id: {req.studentId || "N/A"}
            </span>
          </div>
          <div className="flex flex-wrap gap-2 mt-1">
            {req.approvedDate && (
              <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-medium">
                Approved on: {new Date(req.approvedDate).toLocaleDateString()}
              </span>
            )}
            {req.returnDate && (
              <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded-full text-xs font-medium">
                Return Date: {new Date(req.returnDate).toLocaleDateString()}
              </span>
            )}
          </div>
        </div>
        <span className="bg-green-200 text-green-800 px-5 py-2 rounded-full text-sm font-bold shadow-sm mt-4 md:mt-0">
          Approved
        </span>
      </li>
    </div>
  );
};

export default AppeovedCard;
