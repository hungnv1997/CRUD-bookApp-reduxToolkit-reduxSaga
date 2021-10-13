import { all } from "redux-saga/effects";
import watchDeleteBooks from "./books/deleteBook";
import watchFetchBooks from "./books/fetchBooks";
import watchPostBooks from "./books/postBook";
import watchUpdateBooks from "./books/updateBook";
import watchDeleteCategory from "./categories/deleteCategory";
import watchFetchCategories from "./categories/fetchCategories";
import watchPostCategory from "./categories/postCategory";
import watchUpdateCategory from "./categories/updateCategory";
import watchDeleteReview from "./reviews/deleteReview";
// import watchDeleteReviews from "./reviews/deleteReview";
import watchFetchReviews from "./reviews/fetchReviews";
import watchPostReview from "./reviews/postReview";
import watchUpdateReview from "./reviews/updateReview";
// import booksSaga from "./books/fetchBooks";

export default function* rootSaga() {
  console.log("ROOTSAGAAAAAA________________");
  yield all([
    watchFetchBooks(),
    watchPostBooks(),
    watchDeleteBooks(),
    watchUpdateBooks(),
    watchFetchCategories(),
    watchPostCategory(),
    watchUpdateCategory(),
    watchDeleteCategory(),
    watchPostReview(),
    watchFetchReviews(),
    watchDeleteReview(),
    watchUpdateReview(),
  ]);
}
