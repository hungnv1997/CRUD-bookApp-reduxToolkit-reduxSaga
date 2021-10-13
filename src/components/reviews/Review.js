import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  // deleteReview,
  deleteReviewPending,
} from "../../redux/slices/reviewsSlice";
import EditReview from "./EditReview";

function Review(props) {
  //state
  const [onEdit, setOnEdit] = useState(false);
  //props
  const review = props.review;
  const dispatch = useDispatch();

  //   handle click delete
  const handleClickDelete = (e) => {
    e.preventDefault();
    // console.log("deleteeeeeeeeee");
    dispatch(deleteReviewPending({ id: review.id }));
  };
  const handleClickEdit = (e) => {
    e.preventDefault();
    // dispatch(editReview({ id: review.id }));
    setOnEdit(!onEdit);
  };
  return (
    <div className="row mt-3">
      <div className="card">
        <div className="card-header bg-white d-flex justify-content-between">
          <div className="review__name ">
            <h5 className="">{review.name}</h5>
            <h6 className="text-muted text-start">{review.date}</h6>
          </div>
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-outline-secondary dropdown-toggle border-0 "
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ height: "35px " }}
            ></button>
            <ul class="dropdown-menu dropdown-menu-end">
              <li>
                <button
                  class="dropdown-item"
                  type="button"
                  onClick={(e) => {
                    handleClickDelete(e);
                  }}
                >
                  Delete
                </button>
              </li>
              <li>
                <button
                  class="dropdown-item"
                  type="button"
                  onClick={(e) => {
                    handleClickEdit(e);
                  }}
                >
                  Edit
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="card-body">
          <h6 className="card-text text-muted text-start">{review.review}</h6>
        </div>
      </div>
      {onEdit && (
        <EditReview
          setOnEdit={setOnEdit}
          dispatch={dispatch}
          id={review.id}
          review={props.review}
        />
      )}
    </div>
  );
}

export default Review;
