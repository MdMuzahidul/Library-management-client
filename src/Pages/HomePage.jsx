import React from "react";
import MostPopular from "../Components/RecommededComponent/MostPopular";
import ForYou from "../Components/RecommededComponent/ForYou";
import Notice from "../Components/Notice";

const HomePage = () => {
  return (
    <div>
      <Notice></Notice>
      <MostPopular></MostPopular>
      <ForYou></ForYou>
    </div>
  );
};

export default HomePage;
