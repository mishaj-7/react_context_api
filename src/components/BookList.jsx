import React,{ useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { BookContext } from "../context/BookContext";

const BookList = ()=> {
  const {isLightTheme, light, dark} = useContext(ThemeContext)
  const {books} = useContext(BookContext)
  const theme = isLightTheme ? light : dark;

  return (
    <div
      className="book-list"
      style={{ color: theme.text, background: theme.bg }}
    >
      {books.map((book) => (
        <ul key={book.id}>
          <li style={{background:theme.ui}}>{book.title}</li>
        </ul>
      ))}
    </div>
  );
};


export default BookList;