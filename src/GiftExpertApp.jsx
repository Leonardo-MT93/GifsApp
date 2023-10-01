import { useState } from "react";
import AddCategory from "./components/AddCategory";

const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["Yugioh"]);

    const onAddCategory = () => {

        const newName = 'Caballeros del zodiaco';
        setCategories(categories => [...categories, newName])
    }

  return (
    <>
      {/* TITULO */}
      <h1>GiftExpertAPP</h1>
      {/* INPUT */}

      {/* LISTADO DE GIFS */}
      <AddCategory setCategories={setCategories}/>
      <button onClick={onAddCategory}>Agregar</button>
      <ol>
        {categories.map((category, id)=> (
            <li key={id}>{category}</li>
        ))}

      </ol>
      {/* GIFT ITEM */}
    </>
  );
};

export default GiftExpertApp;
