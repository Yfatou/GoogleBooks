import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { BookListItem, BookList } from "../components/BookList";
import { Col, Row, Container } from "../components/Grid";

class Saved extends Component {
  state = {
    books: []
  };

  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    console.log("in componentDidMount")
    API.getSavedBooks()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  };

  handleDeleteBook = id => {
    API.deleteBook(id)
        .then(res => this.componentDidMount())
        .catch(err => console.log(err))
}

  render() {
    return (
      <div>
        <Jumbotron />
        <div id="savedBooks">
          <h2>Saved Books</h2>
          <Container>
          <BookList>
            {this.state.books.map(book => {
              return (
                <BookListItem
                  key={book._id}
                  title={book.title}
                  link={book.link}
                  authors={book.authors}
                  description={book.description}
                  image={book.image}
                  Button={() => (
                    <button
                      onClick={() => this.handleDeleteBook(book._id)}
                    >
                      Delete
                    </button>
                  )}

                />
              );
            })}
          </BookList>
          </Container>
        </div>
      </div>
    );
  }
}

export default Saved;
