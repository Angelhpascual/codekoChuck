import React from "react";

const Quotes = () => {
  return (
    <div className="h-screen bg-yellow-500">
      <h1 className="text-7xl text-center pt-16 flex flex-col items-center font-mono underline">
        Chuck Norris Quotes
        <img
          src="https://img.icons8.com/plasticine/452/chuck-norris.png"
          alt="chuckIcon"
          className="h-44 w-44 mt-8"
        />
      </h1>
      <div className="grid grid-cols-2 gap-4 container mx-auto pt-12">
        <div className="bg-green-500 h-96 ">Hi</div>
        <div className="bg-green-500">Hi</div>
      </div>
    </div>
  );
};

export default Quotes;
