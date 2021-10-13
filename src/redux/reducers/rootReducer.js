import booksSlice from "../slices/booksSlice";
import categoriesSlice from "../slices/categoriesSlice";
import reviewsSlice from "../slices/reviewsSlice";

const rootReducer = {
  books: booksSlice,
  categories: categoriesSlice,
  reviews: reviewsSlice,
};

export default rootReducer;
