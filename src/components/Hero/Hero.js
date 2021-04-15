import React from "react";
import { Link } from "react-router-dom";
import useSound from "use-sound";
import westernSound from "../../assets/sounds/western.mp3";
import chuckNorrisGuns from "../../assets/images/chucknorrisguns.jpg";

const Hero = () => {
  const [play] = useSound(westernSound);
  return (
    <div className="bg-yellow-500 h-screen flex flex-col justify-center items-center">
      <img className="mb-6 rounded-full" src={chuckNorrisGuns} alt="Chucky" />
      <h1 className="lg:text-8xl md:text-7xl sm:text-5xl text-3xl font-black mb-14 ">
        Chuck Norris CodeKo
      </h1>
      <Link
        to="/quotes"
        className="py-6 px-10 bg-yellow-500 rounded-full text-3xl hover:bg-yellow-300 transition duration-300 ease-in-out flex items-center animate-bounce"
        onClick={play}
      >
        Enter
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 ml-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
          />
        </svg>
      </Link>
    </div>
  );
};

export default Hero;
