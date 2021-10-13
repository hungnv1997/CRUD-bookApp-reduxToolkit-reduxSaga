import { call, put, takeEvery } from "redux-saga/effects";
import { postReview } from "../../../apis/reviews/postReview";
import {
  postReviewFailure,
  postReviewPending,
  postReviewSuccess,
} from "../../slices/reviewsSlice";
// import { fetchBook } from "../../../apis/books/fetchBooks";
// import { postBook } from "../../../apis/books/postBook";
// import {
//   postBookFailure,
//   postBookPending,
//   postBookSuccess,
// } from "../../slices/booksSlice";

function* postReviewSaga(action) {
  //   console.log("fetchbook__________>", action.payload);
  try {
    // console.log("action.payload_____>", action.payload);
    const review = yield call(postReview, action.payload);
    yield put(postReviewSuccess(review));
    console.log("post review success>>>>>>>>>>>>>>>>");
  } catch (e) {
    console.log("POST FAILURE");
    yield put(postReviewFailure(), { error: e });
  }
}

function* watchPostReview() {
  yield takeEvery(postReviewPending.type, postReviewSaga);
}

export default watchPostReview;
