import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  // editCategory,
  putCategoryPending,
} from "../../redux/slices/categoriesSlice";

function EditCategory(props) {
  //props
  const setOnEdit = (boolean) => {
    console.log("Set onedit");
    props.setOnEdit(boolean);
  };
  //useDispatch
  const dispatch = useDispatch();
  // State
  const [inputValue, setInputValue] = useState("");
  // handle change category
  const onChangeInput = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };
  const handleClickClose = () => {
    setOnEdit(false);
  };
  const handleClickApply = () => {
    //check

    if (inputValue !== "") {
      //dispatch
      alert("Successful change!");
      setOnEdit(false);
      dispatch(putCategoryPending({ id: props.id, name: inputValue }));
    } else {
      alert("please insert the value");
    }
  };
  return (
    <div className="card mt-3 p-2">
      <div className="form-floating ">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="Name"
          onChange={(e) => {
            onChangeInput(e);
          }}
        />
        <label for="floatingInput">Category</label>
        <div className="d-flex justify-content-between mt-3">
          <button
            button
            className="btn btn-danger btn-sm"
            onClick={handleClickClose}
          >
            Back
          </button>
          <button className="btn btn-success btn-sm" onClick={handleClickApply}>
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditCategory;
