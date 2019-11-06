import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn(props) {
  return (
    <button type="button" className="delete-btn btn btn-outline-dark"  {...props} tabIndex="0">
      Remove
    </button>
  );
}
export default DeleteBtn;
