import React, { useState } from "react";
import { putReviewPending } from "../../redux/slices/reviewsSlice";

function EditReview(props) {
  //state
  const [inputValue, setInputValue] = useState("");
  //props
  const setOnEdit = (boolean) => {
    props.setOnEdit(boolean);
  };
  const dispatch = (func) => {
    props.dispatch(func);
  };
  //handle
  const handleClickOffEdit = (e) => {
    e.preventDefault();
    setOnEdit(false);
  };
  const handleClickEditBtn = (e) => {
    e.preventDefault();

    // check
    if (inputValue !== "") {
      dispatch(
        putReviewPending({
          id: props.id,
          review: inputValue,
          name: props.review.name,
          date: props.review.date,
        })
      );
      setOnEdit(false);
    } else alert("Please insert value!");
  };
  const handleOnchangeEditInput = (e) => {
    // e.preventDefault();
    setInputValue(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div className="container review__edit card mt-3">
      <div className="row">
        <form>
          <div className="mb-3">
            <div className="d-flex justify-content-between my-3">
              <h5
                for="exampleFormControlInput1"
                className="form-label text-bold"
              >
                Edit review
              </h5>
              <button
                className="btn btn-sm btn-danger"
                onClick={handleClickOffEdit}
                style={{ height: "30px" }}
              >
                X
              </button>
            </div>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder=""
              onChange={handleOnchangeEditInput}
            />
            <button
              className="btn btn-success w-100 mt-3"
              onClick={handleClickEditBtn}
            >
              Edit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditReview;
