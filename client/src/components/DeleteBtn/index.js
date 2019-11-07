import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn(props) {
  const style = {
      color: "#e74944",
      position: "absolute",
      bottom: "1.5rem",
      right: "3rem",
      margin: "0.6rem"
    }
  return (
    <button style={style} type="button" className="delete-btn btn btn-outline-dark"  {...props} tabIndex="0">
      Remove
    </button>
  );
}
export default DeleteBtn;
