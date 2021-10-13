import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
// import { fetchBook } from "../../../apis/books/fetchBooks";
import { postBook } from "../../../apis/books/postBook";
import {
  postBookFailure,
  postBookPending,
  postBookSuccess,
} from "../../slices/booksSlice";

function* postBookSaga(action) {
  //   console.log("fetchbook__________>", action.payload);
  try {
    // console.log("action.payload_____>", action.payload);
    const book = yield call(postBook, action.payload);
    yield put(postBookSuccess(book));
    console.log("post book success>>>>>>>>>>>>>>>>");
  } catch (e) {
    console.log("POST FAILURE");
    yield put(postBookFailure(), { error: e });
  }
}

function* watchPostBooks() {
  yield takeEvery(postBookPending.type, postBookSaga);
}

export default watchPostBooks;
