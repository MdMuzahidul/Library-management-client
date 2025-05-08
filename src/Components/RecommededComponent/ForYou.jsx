import React from "react";
import Marquee from "react-fast-marquee";

const ForYou = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto">
        <div className="flex justify-between items-center my-8">
          <h3 className="text-xl font-bold">For You</h3>
          <button className="btn btn-primary">see more</button>
        </div>
      </div>
      <div className="mb-8">
        <Marquee speed={30} pauseOnHover={true}>
          {[1, 2, 3, 4, 5, 6].map((_, index) => (
            <div key={index} className="mr-8">
              hi
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default ForYou;
