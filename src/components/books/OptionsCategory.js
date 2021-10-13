import React from "react";

function OptionsCategory(props) {
  return (
    <option value={props.category.name.toUpperCase()}>
      {props.category.name.toUpperCase()}
    </option>
  );
}

export default OptionsCategory;
