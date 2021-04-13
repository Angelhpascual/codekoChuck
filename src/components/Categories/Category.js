import React from "react";

const Category = ({ category }) => {
  const getCategory = () => {
    console.log(category);
  };

  return (
    <button onClick={getCategory()}>
      {console.log(category)}
      {category}
    </button>
  );
};

export default Category;
