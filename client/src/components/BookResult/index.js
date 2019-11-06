import React from "react";
import AddBtn from "../AddBtn";
import DeleteBtn from "../DeleteBtn";
import { Link } from "react-router-dom";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function BookResult(props) {
  return (
    <div className="flex-child" key={props.book.ISBN}>
      <div className="img-container">
        {(props.book.image && props.book.image.smallThumbnail) ? (
          <img className="book-result-img" src={props.book.image.smallThumbnail} />
        ) : (<img className="book-result-img" src="http://lgimages.s3.amazonaws.com/nc-sm.gif" />)}
      </div>
      <Link to={props.book.link}>
        <div className="book-info">
          <strong>
            <p style={{ marginBottom: ".1rem" }}>{props.book.title}</p>
            {props.book.subtitle ? (<p style={{ marginBottom: ".1rem" }}>{props.book.subtitle}</p>) : null}
          </strong>
        </div>

        {props.book.authors ? (<p style={{ marginBottom: ".1rem" }}>by {props.book.authors[0]}</p>) : null}

      </Link>
      <div>
        <AddBtn onClick={() => props.addBook(props.book)} />
        <DeleteBtn></DeleteBtn>
      </div>

    </div>
  );
}

export default BookResult;

