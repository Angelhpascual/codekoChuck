import React from "react";
import animate from "animate.css";

const About = () => {
  return (
    <div className="bg-yellow-500 pt-20 ">
      <div className="container  mx-auto grid grid-cols-2 animate__animated animate__bounce animate__delay-2s">
        <div className="h-96 w-auto bg-red-400">1</div>
        <div className="h-auto w-auto bg-red-500">2</div>
        <div className="h-96 w-auto bg-red-600">3</div>
        <div className="col-span-2 h-96 w-auto bg-gray-500">4</div>
        <div className="...">5</div>
        <div className="...">6</div>
        <div className="col-span-2 ...">7</div>
      </div>
    </div>
  );
};

export default About;
