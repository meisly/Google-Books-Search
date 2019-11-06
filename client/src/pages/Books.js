import React, { Component } from "react";

import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import BookResult from "../components/BookResult";
import { Col, Row, Container, ColFlex } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import { brotliCompress } from "zlib";
import BookImg from "../components/BookResult";

class Books extends Component {
  state = {
    books: [],
    title: "",
    author: ""
  };

  componentDidMount() {

  }

  addBook = book => {
    API.saveBook(book)
      .catch(err => console.log(err));

  }

  searchBook = query => {
    API.searchBook(query)
      //   .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title || this.state.author) {
      API.searchBook(
        this.state.title + this.state.author
      )
        .then(res => {
          let books = [];

          books = res.data.items.map(book => {
            let ids = book.volumeInfo.industryIdentifiers;
            return {
              title: book.volumeInfo.title,
              subtitle: (book.volumeInfo.subtitle) ? (book.volumeInfo.subtitle) : null,
              authors: book.volumeInfo.authors,
              description: book.volumeInfo.description,
              image: book.volumeInfo.imageLinks,
              link: book.volumeInfo.previewLink,
              ISBN: ids ? (ids[0].identifier) : ("NA" + Math.random() * 1000)
            }
          })
          this.setState({ books: books })
        })
        .catch((err) => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <ColFlex size="md-12">
            <Jumbotron>
              <h1>Book Search</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Search"
              />
              {/* <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Author (required)"
              /> */}
              <FormBtn
                disabled={!(this.state.author || this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Search
              </FormBtn>
            </form>
          </ColFlex>
          <Col size="md-12">
            <Jumbotron>
              <h1>Search Results</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <ColFlex
                size="md-12"
              >
                {this.state.books.map(book => (
                  <BookResult
                    book={book}
                    addBook={this.addBook}
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
