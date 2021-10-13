import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteCategory,
  deleteCategoryPending,
} from "../../redux/slices/categoriesSlice";
import EditCategory from "./EditCategory";

function Category(props) {
  //state
  const [onEdit, setOnEdit] = useState(false);
  const dispatch = useDispatch();
  // handle onClick delete Btn
  const handleDeleteBtn = () => {
    console.log("delete-------------->");
    dispatch(deleteCategoryPending({ id: props.category.id }));
  };
  const handleClickEditCate = () => {
    setOnEdit(!onEdit);
  };
  return (
    <div className="col-md-3 m-2">
      <div className="">
        <div className="card p-2">
          <div className="card-header d-flex justify-content-between bg-white">
            <div className="align-self-center p-2">Category</div>
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
                    onClick={handleDeleteBtn}
                  >
                    Delete
                  </button>
                </li>
                <li>
                  <button
                    class="dropdown-item"
                    type="button"
                    onClick={handleClickEditCate}
                  >
                    Edit
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-text my-3">
              {props.category.name.toUpperCase()}
            </h5>
          </div>
        </div>
      </div>

      {onEdit && (
        <EditCategory
          id={props.category.id}
          key={props.category.id}
          setOnEdit={setOnEdit}
        />
      )}
    </div>
  );
}

export default Category;
