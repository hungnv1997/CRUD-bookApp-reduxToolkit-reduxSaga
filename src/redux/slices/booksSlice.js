import { createSlice } from "@reduxjs/toolkit";
// import { v4 as uuidv4 } from "uuid";
let initialState = {
  books: [
    {
      id: 1,
      name: "Book 1",
      description: "Note that the development build is not optimized",
      category: "Math",
    },
    {
      id: 2,
      name: "Book 2",
      description: "Note that the development build is not optimized",
      category: "Chemistry",
    },
    {
      id: 3,
      name: "Book 3",
      description: "Note that the development build is not optimized",
      category: "history",
    },
  ],
  loading: false,
  error: false,
};
// fetchBookPending, fetchBookSuccess, fetchBookFailure
// postBookPending, postBookSuccess, postBookFailure
// updateBookPending, updateBookSuccess, updateBookFailure
// deleteBookPending, deleteBookSuccess, deleteBookFailure
export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    //SAGA
    // fetch
    fetchBooksPending: (state, action) => {
      return {
        ...state,
        loading: true,
        error: false,
      };
    },
    fetchBooksSuccess: (state, action) => {
      return {
        books: action.payload.books,
        loading: false,
        error: false,
      };
    },
    fetchBooksFailure: (state, action) => {
      return {
        ...state,
        loading: false,
        error: true,
      };
    },
    // post: postBookPending, postBookSuccess, postBookFailure
    postBookPending: (state, action) => {
      return {
        ...state,
        loading: true,
        error: false,
      };
    },
    postBookSuccess: (state, action) => {
      console.log("Post Book Success", action.payload);
      return {
        books: [...state.books, action.payload.data],
        loading: false,
        error: false,
      };
    },
    postBookFailure: (state, action) => {
      return {
        ...state,
        loading: false,
        error: true,
      };
    },
    // delete: deleteBookPending, deleteBookSuccess, deleteBookFailure
    deleteBookPending: (state, action) => {
      return {
        ...state,
        loading: true,
      };
    },
    deleteBookSuccess: (state, action) => {
      console.log(action.payload.id, ">>>>>>>>>>>>>>>>>>>id delete");
      const newArrBooks = state.books.filter((book) => {
        if (book.id !== action.payload.id) return book;
      });
      return {
        books: newArrBooks,
        loading: false,
        error: false,
      };
    },
    deleteBookFailure: (state, action) => {
      return {
        ...state,
        loading: false,
        error: true,
      };
    },
    // update: putBookPending, putBookSuccess, putBookFailure
    putBookPending: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    putBookSuccess: (state, action) => {
      const updateBook = state.books.map((book) => {
        if (book.id === action.payload.id) {
          return {
            id: action.payload.id,
            name: action.payload.name,
            description: action.payload.description,
            category: action.payload.category,
          };
        } else return book;
      });
      return {
        loading: false,
        error: false,
        books: updateBook,
      };
      // console.log(action.payload);
    },
    putBookFailure: (state, action) => {
      return {
        ...state,
        loading: false,
        error: true,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { getUsers, addBook, removeBook, editBook } = booksSlice.actions;
export const { fetchBooksPending, fetchBooksSuccess, fetchBooksFailure } =
  booksSlice.actions;
export const { postBookFailure, postBookPending, postBookSuccess } =
  booksSlice.actions;
export const { deleteBookFailure, deleteBookPending, deleteBookSuccess } =
  booksSlice.actions;
export const { putBookPending, putBookFailure, putBookSuccess } =
  booksSlice.actions;
export default booksSlice.reducer;
