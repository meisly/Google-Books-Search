import React from "react";
import AddBtn from "../AddBtn";
import DeleteBtn from "../DeleteBtn";
import Modal from "../Modal";
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
      <div className="book-info">
        <strong>
          <p style={{ marginBottom: ".1rem" }}>{props.book.title}</p>
          {props.book.subtitle ? (<p style={{ marginBottom: ".1rem" }}>{props.book.subtitle}</p>) : null}
        </strong>
      </div>

      {props.book.authors ? (<p style={{ marginBottom: ".1rem" }}>by {props.book.authors[0]}</p>) : null}

      <div>
        {props.search ? (
          <div><AddBtn onClick={() => props.addBook(props.book)} />
            <Modal
              book={props.book}>
              <p>{props.book.description}</p>
            </Modal>
          </div>
        ) : (
            <div>
              <DeleteBtn onClick={() => props.deleteBook(props.book._id)}></DeleteBtn>
              <Modal
                book={props.book}>
                <p>{props.book.description}</p>
              </Modal>
            </div>
          )}
      </div>

    </div>
  );
}

export default BookResult;

