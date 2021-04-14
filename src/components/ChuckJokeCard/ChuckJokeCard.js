import React from "react";
import chuckImg from "../../assets/images/chuck.jpg";
const ChuckJokeCard = ({ category, joke, handleDelete }) => {
  return (
    <div className="max-w-md py-4 px-8 bg-yellow-500 shadow-lg rounded-lg my-20">
      <div className="flex justify-center items-center md:justify-end  -mt-16">
        <img
          className="w-20 h-20 object-cover rounded-full border-2 border-yellow-500 "
          src={chuckImg}
          alt="ChuckJokeCard"
        />
      </div>
      <div>
        <h2 className="text-gray-800 text-2xl font-semibold mb-3 capitalize">
          Category: {category}
        </h2>
        <q className="mt-2 text-gray-600">{joke}</q>
      </div>
      <div className="flex  items-center justify-between mt-2">
        <div className="text-xl font-bold text-yellow-100">Chuck Norris</div>
        <div className="flex justify-end">
          <button onClick={() => handleDelete(joke.id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChuckJokeCard;
