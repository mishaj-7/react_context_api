import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { BookContext } from "../context/BookContext";

const BookList = () => {
  // Consuming ThemeContext
  const { isLightTheme, data } = useContext(ThemeContext);
  const { books } = useContext(BookContext);

  // Choosing theme based on isLightTheme
  const theme = isLightTheme ? data.light : data.dark;

  return (
    <div
      className="book-list"
      style={{ color: theme.text, background: theme.bg }}
    >
      {books.map((book) => (
        <ul key={book.id} style={{ background: theme.ui }}>
          <li>{book.title}</li>
        </ul>
      ))}
    </div>
  );
};

export default BookList;
