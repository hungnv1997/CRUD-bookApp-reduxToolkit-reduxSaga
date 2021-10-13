import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviewsPending } from "../../redux/slices/reviewsSlice";
import Review from "./Review";

function Reviews() {
  const reviews = useSelector((state) => state.reviews.reviews);
  console.log("reviews", reviews);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchReviewsPending());
  }, [dispatch]);
  return (
    <div className="container">
      {reviews.length !== null &&
        reviews.map((review) => {
          console.log("AFTER PROPS __________________>", review);
          return <Review review={review} key={review.id} />;
        })}
    </div>
  );
}

export default Reviews;
