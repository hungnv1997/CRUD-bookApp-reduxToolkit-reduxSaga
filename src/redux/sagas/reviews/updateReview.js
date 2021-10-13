import { call, put, takeEvery } from "redux-saga/effects";
import { updateReview } from "../../../apis/reviews/updateReview";
import {
  putReviewFailure,
  putReviewPending,
  putReviewSuccess,
} from "../../slices/reviewsSlice";

function* updateReviewSaga(action) {
  try {
    yield call(updateReview, action.payload);
    // console.log(">>>>>>>>>>>>>>>>>book", book);
    yield put(putReviewSuccess(action.payload));
  } catch (e) {
    console.log("Update FAILURE");
    yield put(putReviewFailure(), { error: e });
  }
}
function* watchUpdateReview() {
  yield takeEvery(putReviewPending.type, updateReviewSaga);
}

export default watchUpdateReview;
