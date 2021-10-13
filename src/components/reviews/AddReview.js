import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postReviewPending } from "../../redux/slices/reviewsSlice";
import { v4 as uuidv4 } from "uuid";
function AddReview() {
  //dispatch
  const dispatch = useDispatch();
  // state
  const [inputName, setInputName] = useState("");
  const [inputReview, setInputReview] = useState("");
  const onChangeInput = (e) => {
    console.log(e.target.value);
    setInputName(e.target.value);
  };
  const onChangeComment = (e) => {
    console.log(e.target.value);
    setInputReview(e.target.value);
  };
  function formatted_date() {
    var result = "";
    var d = new Date();
    result += d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
    return result;
  }
  const handleSubmitBtn = (e) => {
    e.preventDefault();
    const id = uuidv4();
    if (inputName !== "" && inputReview !== "") {
      const date = formatted_date();
      //   console.log("__________>", date);
      //dispatch addReview
      dispatch(
        postReviewPending({
          id: id,
          name: inputName,
          review: inputReview,
          date: date,
        })
      );
      alert("Success");
    } else {
      alert("Please insert value!");
    }
  };
  return (
    <div className="container card">
      <div className="row">
        <form className="col-md-12">
          <div className="form-floating mb-3 w-100 ">
            <input
              type="text"
              className="form-control mt-3"
              id="floatingPassword"
              placeholder="New Category"
              onChange={(e) => {
                onChangeInput(e);
              }}
            />
            <label for="floatingPassword">Name</label>
          </div>
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              onChange={(e) => {
                onChangeComment(e);
              }}
              style={{ height: "100px" }}
            ></textarea>
            <label for="floatingTextarea2">Comments</label>
          </div>
          <button
            onClick={handleSubmitBtn}
            className="btn btn-primary my-3 float-end"
          >
            Comments
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddReview;
