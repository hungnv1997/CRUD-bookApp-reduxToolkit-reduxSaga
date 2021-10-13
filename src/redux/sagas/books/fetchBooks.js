import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { fetchBook } from "../../../apis/books/fetchBooks";
import {
  fetchBooksFailure,
  fetchBooksPending,
  fetchBooksSuccess,
} from "../../slices/booksSlice";

function* fetchBooks(action) {
  console.log("fetchbook__________>");
  try {
    const { data } = yield call(fetchBook);
    const books = data;
    yield put(fetchBooksSuccess({ books: books }));
  } catch (e) {
    yield put(fetchBooksFailure({ error: e }));
  }
}

function* watchFetchBooks() {
  yield takeLatest(fetchBooksPending.type, fetchBooks);
}

export default watchFetchBooks;
