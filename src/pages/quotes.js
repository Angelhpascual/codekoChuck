import React, { useEffect, useState } from "react";
import axios from "axios";
import Axios from "axios";
import ChuckJokeCard from "../components/ChuckJokeCard/ChuckJokeCard";

const Quotes = () => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [categoryQuote, setCategoryQuote] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://api.chucknorris.io/jokes/categories")
      .then((response) => {
        setCategories(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [setCategories]);

  const getJokeCategory = (category) => {
    axios
      .get(`https://api.chucknorris.io/jokes/random?category=${category}`)
      .then((response) => {
        console.log(response.data);
        setCategoryQuote([response.data, ...categoryQuote]);
        console.log(categoryQuote.id);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDelete = (key) => {
    console.log(categoryQuote);
    const removeFacts = categoryQuote.filter((joke) => joke.id !== key);
    console.log(removeFacts);
    setCategoryQuote(removeFacts);
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
              categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => getJokeCategory(category)}
                  value={category}
                  className="bg-yellow-300 hover:bg-yellow-400 text-white font-bold py-3 rounded uppercase"
                >
                  {category}
                </button>
              ))
            )}
          </div>
        </div>
        <div className="bg-yellow-600 rounded-lg h-auto flex flex-col items-center text-2xl p-12 mb-20 font-mono overflow-auto ">
          {categoryQuote.length > 0 ? (
            categoryQuote.map((joke, index) => (
              <ChuckJokeCard
                key={index}
                category={joke.categories[0]}
                joke={joke.value}
                handleDelete={() => handleDelete(joke.id)}
              />
            ))
          ) : (
            <div className="text-center">
              Click one <span className="font-bold underline">category</span> to
              show a Chuck's joke
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quotes;
