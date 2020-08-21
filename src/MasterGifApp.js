// rafc --> snippet para crear componentes funcionales
import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
import PropTypes from "prop-types";

export const MasterGifApp = ({ defaultCategories }) => {
  const [categories, setCategories] = useState(defaultCategories);

  return (
    <>
      <h2>Master Gif</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

MasterGifApp.propTypes = {
  defaultCategories: PropTypes.array,
};

MasterGifApp.defaultProps = {
  defaultCategories: [],
};
