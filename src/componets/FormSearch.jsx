import "../styles/FormSearch.css";
import React, { useRef } from "react";

const FormSearch = ({ setInputValue }) => {
  const inputSearch = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue(inputSearch.current.value.trim());
    inputSearch.current.value = "";
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        placeholder="Number from 1 to 126"
        className="form__input"
        ref={inputSearch}
        type="text"
      />
      <button className="form__btn">Search</button>
    </form>
  );
};

export default FormSearch;
