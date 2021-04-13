import React, { useEffect, useState } from "react";
import axios from "axios";
import Category from "../components/Categories/Category";

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
        return data;
      });
    axios.get("https://api.chucknorris.io/jokes/random").then((response) => {
      const { data } = response;
      setQuotes(data);
      return data;
    });
  }, []);

  // const handleQuoteCategory = () => {
  //   axios
  //     .get("https://api.chucknorris.io/jokes/random?category=dev")
  //     .then((response) => {
  //       const { data } = response;
  //       console.log(data);
  //       setQuotes(data);
  //     });
  // };

  const handleClick = (category) => {
    console.log(category.target.value);
    axios
      .get(
        `https://api.chucknorris.io/jokes/random?category=${category.target.value}`
      )
      .then((response) => {
        const { data } = response;
        console.log(data.value);
        setCategoryQuote(data.value);
        setCategoryQuote((oldArray) => [...oldArray, data.value]);
      });
  };

  console.log(categoryQuote);
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
        <div className="bg-yellow-600 h-96 text-center">
          <div className="grid grid-cols-3 gap-4 p-4">
            {categories.map((category) => (
              <button
                onClick={handleClick}
                key={category}
                value={category}
                className="bg-yellow-300 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded"
              >
                {category}
              </button>
            ))}
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
