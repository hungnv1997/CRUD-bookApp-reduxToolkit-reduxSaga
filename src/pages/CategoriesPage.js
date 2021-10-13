import React from "react";

import AddCategory from "../components/categories/AddCategory";
import Categories from "../components/categories/Categories";

function CategoriesPage() {
  return (
    <div className="container">
      <AddCategory />
      <Categories />
    </div>
  );
}

export default CategoriesPage;
