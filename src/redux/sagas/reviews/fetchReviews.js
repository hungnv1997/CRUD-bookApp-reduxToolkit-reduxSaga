import { call, put, takeLatest } from "redux-saga/effects";
import { fetchReviews } from "../../../apis/reviews/fetchReviews";
import {
  fetchReviewsFailure,
  fetchReviewsPending,
  fetchReviewsSuccess,
} from "../../slices/reviewsSlice";
// import { fetchBook } from "../../../apis/books/fetchBooks";
// import {
//   fetchBooksFailure,
//   fetchBooksPending,
//   fetchBooksSuccess,
// // } from "../../slices/booksSlice";

function* fetchReviewsSaga(action) {
  console.log("fetchReview__________>");
  try {
    const { data } = yield call(fetchReviews);
    const reviews = data.reverse();
    console.log(">>>>>>>>>>>>>>>>>>>reviews", reviews);
    yield put(fetchReviewsSuccess({ reviews: reviews }));
  } catch (e) {
    yield put(fetchReviewsFailure({ error: e }));
  }
}

function* watchFetchReviews() {
  yield takeLatest(fetchReviewsPending.type, fetchReviewsSaga);
}

export default watchFetchReviews;
