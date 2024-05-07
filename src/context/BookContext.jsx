import React, { createContext, useState } from 'react'

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
      { title: "atomic haibt", id: 1 },
      { title: "how to talk anyone", id: 2 },
      { title: "the wings of fire", id: 3 },
      { title: "eat the big frog first", id: 4 },
      { title: "The Psychology Of Money",id:5 },
    ]);
   // console.log(books);
  return (
      <BookContext.Provider value={{books}}>
        {props.children}
    </BookContext.Provider>
  )
}

export default BookContextProvider;
