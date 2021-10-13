import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  reviews: [],
  loading: false,
  error: false,
};
export const reviewsSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    addReview: (state, action) => {
      state.unshift(action.payload);
    },
    deleteReview: (state, action) => {
      return state.filter((review) => {
        return review.id !== action.payload.id;
      });
    },
    editReview: (state, action) => {
      return state.map((review) => {
        if (review.id == action.payload.id) {
          return {
            id: review.id,
            name: review.name,
            review: action.payload.review,
            date: review.date,
          };
        } else {
          return review;
        }
      });
    },
    fetchReviewsPending: (state, action) => {
      return {
        ...state,
        loading: true,
        error: false,
      };
    },
    fetchReviewsSuccess: (state, action) => {
      return {
        reviews: action.payload.reviews,
        loading: false,
        error: false,
      };
    },
    fetchReviewsFailure: (state, action) => {
      return {
        ...state,
        loading: false,
        error: true,
      };
    },
    // post: postBookPending, postBookSuccess, postBookFailure
    postReviewPending: (state, action) => {
      return {
        ...state,
        loading: true,
        error: false,
      };
    },
    postReviewSuccess: (state, action) => {
      console.log("Post Review Success", action.payload);
      return {
        reviews: [action.payload.data, ...state.reviews],
        loading: false,
        error: false,
      };
    },
    postReviewFailure: (state, action) => {
      return {
        ...state,
        loading: false,
        error: true,
      };
    },
    // delete: deleteBookPending, deleteBookSuccess, deleteBookFailure
    deleteReviewPending: (state, action) => {
      return {
        ...state,
        loading: true,
      };
    },
    deleteReviewSuccess: (state, action) => {
      console.log(action.payload.id, ">>>>>>>>>>>>>>>>>>>id delete");
      const newArrReviews = state.reviews.filter((review) => {
        if (review.id !== action.payload.id) return review;
      });
      return {
        reviews: newArrReviews,
        loading: false,
        error: false,
      };
    },
    deleteReviewFailure: (state, action) => {
      return {
        ...state,
        loading: false,
        error: true,
      };
    },
    // update: putBookPending, putBookSuccess, putBookFailure
    putReviewPending: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    putReviewSuccess: (state, action) => {
      const updateReview = state.reviews.map((review) => {
        if (review.id === action.payload.id) {
          return {
            id: action.payload.id,
            name: action.payload.name,
            review: action.payload.review,
            date: action.payload.date,
          };
        } else return review;
      });
      return {
        loading: false,
        error: false,
        reviews: updateReview,
      };
      // console.log(action.payload);
    },
    putReviewFailure: (state, action) => {
      return {
        ...state,
        loading: false,
        error: true,
      };
    },
  },
});
export const { addReview, deleteReview, editReview } = reviewsSlice.actions;
export const { fetchReviewsFailure, fetchReviewsPending, fetchReviewsSuccess } =
  reviewsSlice.actions;
export const { postReviewFailure, postReviewPending, postReviewSuccess } =
  reviewsSlice.actions;
export const { putReviewFailure, putReviewPending, putReviewSuccess } =
  reviewsSlice.actions;
export const { deleteReviewFailure, deleteReviewPending, deleteReviewSuccess } =
  reviewsSlice.actions;
export default reviewsSlice.reducer;
