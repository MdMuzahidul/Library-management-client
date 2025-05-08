import React from "react";
import muzahid from "../assets/20231115_112839.jpg";

const aboutUs = () => {
  return (
    <div className="h-[570px] bg-gray-100 flex items-center  justify-center p-4 gap-6">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-xl w-full text-center">
        <img
          src={muzahid}
          alt="Profile"
          className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-blue-500"
        />
        <h1 className="text-2xl font-bold mt-4 text-gray-800">John Doe</h1>
        <h2 className="text-lg text-blue-600 mt-1">University of Example</h2>
        <p className="mt-4 text-gray-600 text-sm leading-relaxed">
          I am a passionate computer science student with a deep interest in web
          development, machine learning, and UI/UX design. I love building
          modern web applications and exploring new technologies that solve
          real-world problems.
        </p>
      </div>
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-xl w-full text-center">
        <img
          src={muzahid}
          alt="Profile"
          className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-blue-500"
        />
        <h1 className="text-2xl font-bold mt-4 text-gray-800">John Doe</h1>
        <h2 className="text-lg text-blue-600 mt-1">University of Example</h2>
        <p className="mt-4 text-gray-600 text-sm leading-relaxed">
          I am a passionate computer science student with a deep interest in web
          development, machine learning, and UI/UX design. I love building
          modern web applications and exploring new technologies that solve
          real-world problems.
        </p>
      </div>
    </div>
  );
};

export default aboutUs;
