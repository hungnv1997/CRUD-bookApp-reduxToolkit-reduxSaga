import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoriesPending } from "../../redux/slices/categoriesSlice";
// import { useSelector } from "react-redux";
import Category from "./Category";

function Categories() {
  const categories = useSelector((state) => state.categories.categories);
  console.log("?>>>>>>>>>categories", categories);
  const dispatch = useDispatch();
  // console.log("--------------->", categories);
  useEffect(() => {
    dispatch(fetchCategoriesPending());
  }, [dispatch]);
  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-center align-item-center">
        {categories.map((category) => {
          return <Category category={category} key={category.id} />;
        })}
      </div>
    </div>
  );
}

export default Categories;
