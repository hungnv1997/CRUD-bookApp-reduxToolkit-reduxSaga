import { call, put, takeEvery } from "redux-saga/effects";
import { updateBook } from "../../../apis/books/updateBook";
import {
  putBookFailure,
  putBookPending,
  putBookSuccess,
} from "../../slices/booksSlice";

function* updateBookSaga(action) {
  try {
    const book = yield call(updateBook, action.payload);
    // console.log(">>>>>>>>>>>>>>>>>book", book);
    yield put(putBookSuccess(action.payload));
  } catch (e) {
    console.log("Update FAILURE");
    yield put(putBookFailure(), { error: e });
  }
}
function* watchUpdateBooks() {
  yield takeEvery(putBookPending.type, updateBookSaga);
}

export default watchUpdateBooks;
