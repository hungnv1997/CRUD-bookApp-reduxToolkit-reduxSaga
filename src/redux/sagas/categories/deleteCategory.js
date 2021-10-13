import { call, put, takeEvery } from "redux-saga/effects";
// import { deleteBook } from "../../../apis/books/deleteBook";
import { deleteCategory } from "../../../apis/categories/deleteCategory";

import {
  deleteCategoryFailure,
  deleteCategoryPending,
  deleteCategorySuccess,
} from "../../slices/categoriesSlice";

function* deleteCategorySaga(action) {
  try {
    //   Call delete Category Api
    yield call(deleteCategory, action.payload.id);

    yield put(deleteCategorySuccess({ id: action.payload.id }));
  } catch (e) {
    console.log("DELETE FAILURE");
    yield put(deleteCategoryFailure(), { error: e });
  }
}
function* watchDeleteCategory() {
  yield takeEvery(deleteCategoryPending.type, deleteCategorySaga);
}

export default watchDeleteCategory;
