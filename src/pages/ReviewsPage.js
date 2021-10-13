import React from "react";
import AddReview from "../components/reviews/AddReview";

import Reviews from "../components/reviews/Reviews";
// import reviewsSlice from '../redux/slices/reviewsSlice'

function ReviewsPage() {
  return (
    <div>
      <AddReview />
      <Reviews />
    </div>
  );
}

export default ReviewsPage;
