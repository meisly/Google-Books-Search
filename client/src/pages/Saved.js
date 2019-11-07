import React, { Component } from "react";
import BookResult from "../components/BookResult";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container, ColFlex } from "../components/Grid";


class Books extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };




  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <ColFlex
                size="md-12"
              >
                {this.state.books.map(book => (
                  <BookResult
                    book={book}
                    deleteBook={this.deleteBook}
                    search={false}
                  ></BookResult>
                ))}
              </ColFlex>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
