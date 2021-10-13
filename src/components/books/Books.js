import React, { useEffect } from "react";
import Book from "./Book.js";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooksPending } from "../../redux/slices/booksSlice.js";

function Books() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  console.log("____________________>BOOKS", books);
  useEffect(() => {
    dispatch(fetchBooksPending());
  }, [dispatch]);
  return (
    <div className="container-fluid">
      <div className="row d-flex align-item-center justify-content-center">
        {books.length > 0 &&
          books.map((book) => {
            return <Book book={book} key={book.id} />;
          })}
      </div>
    </div>
  );
}

export default Books;
