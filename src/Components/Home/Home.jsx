import React from "react";
import Header from "../Header/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="p-4">
        <h1 className="text-2xl font-bold">Welcome to Amor 21 Library</h1>
        <p>Explore books, write blogs, and get recommendations!</p>
      </div>
    </div>
  );
};

export default Home;
