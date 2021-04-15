import React, { useEffect, useState } from "react";
import axios from "axios";
import ChuckJokeCard from "../components/ChuckJokeCard/ChuckJokeCard";
import chuckCartoon from "../assets/images/chucknorriscartoon.png";

const Quotes = () => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [categoryQuote, setCategoryQuote] = useState([]);
  /**
   * *Getting the categories
   */
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

  /**
   * *Set LocalStorage[]
   */
  useEffect(() => {
    localStorage.setItem("jokes", JSON.stringify(categoryQuote));
  }, [categoryQuote]);

  /**
   * *Get LocalStorage[]
   */
  useEffect(() => {
    setCategoryQuote(JSON.parse(localStorage.getItem("jokes")));
  }, []);

  /**
   *
   * *Function for getting a joke from a category
   * *params : category
   */
  const getJokeCategory = (category) => {
    axios
      .get(`https://api.chucknorris.io/jokes/random?category=${category}`)
      .then((response) => {
        setCategoryQuote([response.data, ...categoryQuote]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  /**
   * *Delete Function
   * *params: categoryQuote.id
   */
  const handleDelete = (id) => {
    const newJokes = categoryQuote.filter((joke) => joke.id !== id);
    setCategoryQuote(newJokes);
  };
  return (
    <div className=" bg-yellow-500">
      <h1 className="lg:text-7xl md:text-5xl sm:text-3xl text-center pt-16 flex flex-col items-center font-mono underline">
        Chuck Norris Quotes
        <img
          src={chuckCartoon}
          alt="chuckIcon"
          className="h-44 w-44 mt-8 animate__animated animate__bounceIn animate__slower "
        />
      </h1>
      <div className="grid grid-cols-1 gap-4 container mx-auto pt-12">
        <div className="bg-yellow-600 rounded-xl text-center">
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
                  className="bg-yellow-300 hover:bg-yellow-400 text-yellow-800 font-bold py-3 text-xs sm:text-xl rounded uppercase"
                >
                  {category}
                </button>
              ))
            )}
          </div>
        </div>
        <div className="bg-yellow-600 rounded-lg h-auto flex flex-col items-center text-2xl p-12 mb-20 font-mono overflow-hidden ">
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
              Click one <span className="font-bold">category</span> to show a
              Chuck's joke
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quotes;
