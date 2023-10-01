import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["Orihime"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories((categories) => [newCategory, ...categories]);
  };

  return (
    <>
      <h1>GiftExpertAPP</h1>

      <AddCategory
        onNewCategory={onAddCategory}
      />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};

export default GiftExpertApp;
