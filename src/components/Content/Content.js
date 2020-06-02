import React, { useState } from "react";
import FormBlock from "../FormBlock/formBlock";
import BooksContainer from "../BooksContainer/BooksContainer";

// Hello Lector, u can check my 2 versions of this Component(using class  and hooks).
const Content = props => {
  const [books, setBooks] = useState([]);
  const [value, setValue] = useState("");

  const handleInput = e => {
    setValue(e.target.value);
  };

  const getData = e => {
    e.preventDefault();

    if (value.trim().length === 0) return;

    fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}`)
      .then(resp => resp.json())
      .then(data => {
        setBooks(data.items);
      })
      .catch(() => {
        console.log("err");
      });
  };

  return (
    <div>
      <FormBlock handleInput={handleInput} getData={getData} />
      <BooksContainer books={books} />
    </div>
  );
};

export default Content;
