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

  const getJokeCategory = (category) => {
    axios
      .get(
        `https://api.chucknorris.io/jokes/random?category=${category.target.value}`
      )
      .then((response) => setCategoryQuote(response.data))
      .catch((error) => {
        console.error(error);
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
                  key={category}
                  value={category}
                  className="bg-yellow-300 hover:bg-yellow-400 text-white font-bold py-2 rounded uppercase"
                >
                  {category}
                </button>
              ))
            )}
          </div>
        </div>
        <div className="bg-yellow-600 h-96 flex justify-center items-center text-justify text-2xl p-12">
          <q>{quotes.value}</q>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
