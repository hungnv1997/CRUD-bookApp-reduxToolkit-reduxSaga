import { call, put, takeEvery } from "redux-saga/effects";
import { deleteBook } from "../../../apis/books/deleteBook";
import {
  deleteBookFailure,
  deleteBookPending,
  deleteBookSuccess,
} from "../../slices/booksSlice";

function* deleteBookSaga(action) {
  try {
    // console.log("action.payload_____>", action.payload.id);
    let book = yield call(deleteBook, action.payload.id);
    // console.log(">>>>>>>>>>>>>>>>>book", book);
    yield put(deleteBookSuccess({ id: action.payload.id }));
  } catch (e) {
    console.log("DELETE FAILURE");
    yield put(deleteBookFailure(), { error: e });
  }
}
function* watchDeleteBooks() {
  yield takeEvery(deleteBookPending.type, deleteBookSaga);
}

export default watchDeleteBooks;
