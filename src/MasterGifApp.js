// rafc --> snippet para crear componentes funcionales
import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const MasterGifApp = () => {
  const [categories, setCategories] = useState([]);

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
