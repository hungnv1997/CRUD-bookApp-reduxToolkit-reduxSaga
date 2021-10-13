import { call, put, takeEvery } from "redux-saga/effects";
// import { updateBook } from "../../../apis/books/updateBook";
import { updateCategory } from "../../../apis/categories/updateCategory";

import {
  putCategoryFailure,
  putCategoryPending,
  putCategorySuccess,
} from "../../slices/categoriesSlice";

function* updateCategorySaga(action) {
  try {
    const book = yield call(updateCategory, action.payload);
    // console.log(">>>>>>>>>>>>>>>>>book", book);
    yield put(putCategorySuccess(action.payload));
  } catch (e) {
    console.log("Update FAILURE");
    yield put(putCategoryFailure({ error: e }));
  }
}
function* watchUpdateCategory() {
  yield takeEvery(putCategoryPending.type, updateCategorySaga);
}

export default watchUpdateCategory;
