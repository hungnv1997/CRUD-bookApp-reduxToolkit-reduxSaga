import { call, put, takeEvery } from "redux-saga/effects";
// import { fetchBook } from "../../../apis/books/fetchBooks";
// import { postBook } from "../../../apis/books/postBook";
import { postCategory } from "../../../apis/categories/postCategory";

import {
  postCategoryFailure,
  postCategoryPending,
  postCategorySuccess,
} from "../../slices/categoriesSlice";

function* postCategorySaga(action) {
  // console.log("postbook__________>", action.payload);
  try {
    console.log("action.payload_____>", action.payload);
    const category = yield call(postCategory, action.payload);
    yield put(postCategorySuccess(category));
  } catch (e) {
    console.log("POST FAILURE");
    yield put(postCategoryFailure(), { error: e });
  }

  //   const { res, error } = yield call(postBook, action.payload);
  //   console.log("resssssssssssssssssssssssssssss", res);
  //   if (res) yield put(postBookSuccess(res.data));
  //   else yield put(postBookFailure({ error: error }));
}

function* watchPostCategory() {
  yield takeEvery(postCategoryPending.type, postCategorySaga);
}

export default watchPostCategory;
