import React from "react";
import MostPopular from "../Components/RecommededComponent/MostPopular";
import ForYou from "../Components/RecommededComponent/ForYou";
import Notice from "../Components/Notice";
import HeroSection from "../Components/HeroSection";

const HomePage = () => {
  return (
    <div>
      <Notice></Notice>
      <HeroSection></HeroSection>
      <MostPopular></MostPopular>
      <ForYou></ForYou>
    </div>
  );
};

export default HomePage;
