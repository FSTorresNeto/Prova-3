import React from "react";

export default React.createContext({
  books: [],
  search: () => {},
  addNewBook: (book) => {},
  deleteBook: (taskId) => {},
});
