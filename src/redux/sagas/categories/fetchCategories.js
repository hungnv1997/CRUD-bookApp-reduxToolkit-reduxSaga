import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
// import { fetchBook } from "../../../apis/books/fetchBooks";
import { fetchCategories } from "../../../apis/categories/fetchCategories";

import {
  fetchCategoriesFailure,
  fetchCategoriesPending,
  fetchCategoriesSuccess,
} from "../../slices/categoriesSlice";

function* fetchCategoriesSaga(action) {
  //   console.log("fetchcata__________>");
  try {
    const { data } = yield call(fetchCategories);
    const categories = data;
    // console.log(">>>>>>>>Categories", categories);
    yield put(fetchCategoriesSuccess({ categories: categories }));
  } catch (e) {
    yield put(fetchCategoriesFailure({ error: e }));
  }
}

function* watchFetchCategories() {
  yield takeLatest(fetchCategoriesPending.type, fetchCategoriesSaga);
}

export default watchFetchCategories;
