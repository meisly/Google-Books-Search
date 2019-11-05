import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function BookImage(props) {
  return (
    <div className="img-container">
      <img className="book-result-img" src={props.srcUrl} >  
    </img>
    </div>
    
  );
}

export default BookImage;

