import React, { useEffect, useState } from "react";
import axios from "axios";

const Quotes = () => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [quotes, setQuotes] = useState([]);
  const [categoryQuote, setCategoryQuote] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://api.chucknorris.io/jokes/categories")
      .then((response) => {
        const { data } = response;
        setCategories(data);
        setLoading(false);
      });
  }, []);

  const handleClick = (category) => {
    axios
      .get(`https://api.chucknorris.io/jokes/random?category=${category}`)
      .then((response) => {
        const { data } = response;
        console.log(data.value);
        setCategoryQuote([data.value, ...categoryQuote]);
      });
  };
  return (
    <div className=" bg-yellow-500">
      <h1 className="text-7xl text-center pt-16 flex flex-col items-center font-mono underline">
        Chuck Norris Quotes
        <img
          src="https://img.icons8.com/plasticine/452/chuck-norris.png"
          alt="chuckIcon"
          className="h-44 w-44 mt-8"
        />
      </h1>
      <div className="grid grid-cols-1 gap-4 container mx-auto pt-12">
        <div className="bg-yellow-600  text-center">
          <div className="grid grid-cols-4 gap-4 p-4">
            {loading ? (
              <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center bg-gray-500 bg-opacity-50">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-yellow-900"></div>
              </div>
            ) : (
              categories.map((category) => (
                <button
                  onClick={() => handleClick(category)}
                  key={category}
                  value={category}
                  className="bg-yellow-300 hover:bg-yellow-400 text-white font-bold py-3 rounded uppercase"
                >
                  {category}
                </button>
              ))
            )}
          </div>
        </div>
        <div className="bg-yellow-600 rounded-lg h-auto flex flex-col text-2xl p-12 mb-20 font-mono overflow-auto divide-y divide-yellow-800">
          {categoryQuote.length === 0 ? (
            <h1 className="text-center">
              Click one category to show a Chuck's joke
            </h1>
          ) : (
            categoryQuote.map((joke, index) => (
              <ul key={index}>
                <li className=" mt-5 flex justify-between r">
                  <q>{joke}</q>
                  <button className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </li>
              </ul>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Quotes;
