import { call, put, takeEvery } from "redux-saga/effects";
import { deleteReview } from "../../../apis/reviews/deleteReview";
import {
  deleteReviewFailure,
  deleteReviewPending,
  deleteReviewSuccess,
} from "../../slices/reviewsSlice";
// import { deleteReview } from "../../slices/reviewsSlice";
// import { deleteBook } from "../../../apis/books/deleteBook";
// import {
//   deleteBookFailure,
//   deleteBookPending,
//   deleteBookSuccess,
// } from "../../slices/booksSlice";

function* deleteReviewSaga(action) {
  try {
    // console.log("action.payload_____>", action.payload.id);
    yield call(deleteReview, action.payload.id);
    // console.log(">>>>>>>>>>>>>>>>>book", book);
    yield put(deleteReviewSuccess({ id: action.payload.id }));
  } catch (e) {
    console.log("DELETE FAILURE");
    yield put(deleteReviewFailure(), { error: e });
  }
}
function* watchDeleteReview() {
  yield takeEvery(deleteReviewPending.type, deleteReviewSaga);
}

export default watchDeleteReview;
