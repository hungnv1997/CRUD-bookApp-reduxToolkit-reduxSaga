import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteBookPending,
  putBookPending,
} from "../../redux/slices/booksSlice";
import { fetchCategoriesPending } from "../../redux/slices/categoriesSlice";

import OptionsCategory from "./OptionsCategory";

function Book(props) {
  //useSelector
  const categories = useSelector((state) => state.categories.categories);
  // console.log("------------------->book prop", props.book);
  //state
  const [onEdit, setOnEdit] = useState(false);
  const [newNameBook, setNewNameBook] = useState("");
  const [newDesBook, setNewDesBook] = useState("");
  const [newCategory, setNewCategory] = useState("");

  //props
  const book = props.book;
  const index = book.id;
  //dispatch
  const dispatch = useDispatch();
  //handle button
  const handleEditBook = () => {
    console.log("Click edit");
    //change state edit
    setOnEdit(!onEdit);
  };
  const handleSubmitEdit = () => {
    console.log("Handle submit");
    if (newNameBook !== "" && newDesBook !== "") {
      //dispatch edit book
      dispatch(
        putBookPending({
          id: index,
          name: newNameBook,
          description: newDesBook,
          category: newCategory,
        })
      );
      //setOnEdit(false)
      setOnEdit(false);
    } else {
      alert("Please insert the value");
    }
  };
  //handle input
  const onChangeNameBook = (event) => {
    setNewNameBook(event.target.value);
    console.log(event.target.value);
  };
  const onChangeDesBook = (event) => {
    setNewDesBook(event.target.value);
    console.log(event.target.value);
  };
  const handleSelect = (event) => {
    setNewCategory(event.target.value);
  };
  // effect
  useEffect(() => {
    dispatch(fetchCategoriesPending());
  }, [dispatch]);
  //_____________________RETURN___________________
  return (
    <div className=" col-md-3 m-2">
      <div className="card p-3">
        <div className="card-header bg-white mb-3 d-flex justify-content-between mb-3 align-item-center">
          <h5 className="align-self-center">{book.name}</h5>

          <div class="btn-group">
            <button
              type="button"
              class="btn btn-outline-secondary dropdown-toggle border-0"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ height: "35px " }}
            ></button>
            <ul class="dropdown-menu dropdown-menu-end">
              <li>
                <button
                  class="dropdown-item"
                  type="button"
                  onClick={() => dispatch(deleteBookPending({ id: index }))}
                >
                  Delete
                </button>
              </li>
              <li>
                <button
                  class="dropdown-item"
                  type="button"
                  onClick={handleEditBook}
                >
                  Edit
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="card-body">
          <h6 className="card-subtitle text-start">
            Category: {book.category}
          </h6>
          <h6 className="card-text text-start mt-3 text-muted">
            {book.description}
          </h6>
        </div>
        {/* <div className="card-footer bg-white">
          <button className="btn btn-primary w-100" onClick={handleEditBook}>
            Edit
          </button>
        </div> */}
      </div>
      {/* edit */}

      {onEdit ? (
        <div className="card mt-2">
          <div className="edit-overlay m-2">
            <div className="d-flex justify-content-between my-2">
              <h5>Edit: {book.name} </h5>
              <button
                className="btn btn-outline-dark btn-sm"
                onClick={() => {
                  setOnEdit(false);
                  console.log("click", onEdit);
                }}
              >
                X
              </button>
            </div>
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="Name"
                onChange={(e) => {
                  onChangeNameBook(e);
                }}
              />
              <label for="floatingInput">Change name</label>
            </div>
            <div className="form-floating mt-3">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="Name"
                onChange={(e) => {
                  onChangeDesBook(e);
                }}
              />
              <label for="floatingInput">Change description</label>
            </div>
            <select
              className="form-select mt-3"
              aria-label="Default select example"
              onChange={(e) => handleSelect(e)}
            >
              <option selected>Choose category</option>
              {categories &&
                categories.map((category) => {
                  return (
                    <OptionsCategory category={category} key={category.id} />
                  );
                })}
            </select>
            <button
              className="btn btn-success w-100 mt-3"
              onClick={handleSubmitEdit}
            >
              {" "}
              Submit
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
      {/* </div> */}
    </div>
  );
}

export default Book;
