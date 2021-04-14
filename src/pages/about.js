import React from "react";
import animate from "animate.css";

const About = () => {
  return (
    <div className="bg-yellow-500 pt-20 pb-20 ">
      <div className="container  mx-auto grid grid-cols-3  gap-4 ">
        <div className="h-96 w-auto  bg-red-400 animate__animated animate__bounceInLeft"></div>
        <div className="h-auto w-auto col-span-2 bg-red-500 animate__animated animate__bounceInRight">
          2
        </div>
        <div className="h-96 w-auto col-span-2  bg-red-600 animate__animated animate__bounceInLeft">
          3
        </div>
        <div className=" h-96 w-auto bg-blue-400 animate__animated animate__bounceInRight ">
          4
        </div>
        <div className="h-96 w-auto bg-blue-500  animate__animated animate__bounceInRight animate__fast">
          5
        </div>
        <div className="h-96 w-auto  col-span-2 bg-blue-600 animate__animated animate__bounceInLeft">
          6
        </div>
      </div>
    </div>
  );
};

export default About;
