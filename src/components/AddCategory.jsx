import { useState } from "react";

const AddCategory = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(inputValue.trim().length <= 1)return;
    // setCategories(categories => [inputValue, ...categories]);
    onNewCategory(inputValue.trim())
    setInputValue('')
  }
  return (
    <form onSubmit={ handleSubmit }>
      <input
        type="text"
        placeholder="Buscar gifts"
        value={inputValue}
        onChange={handleChange}
      />
    </form>
  )
};

export default AddCategory;
