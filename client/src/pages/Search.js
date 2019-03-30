import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import Input from "../components/Input";
import { BookListItem, BookList } from "../components/BookList";
import "./style.css";


class Search extends Component {
  state = {// The state will be the array of books and the user input
    books: [],
    bookInput: ""
  };


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    this.setState({ bookInput: event.target.value })
  };
  
  // When the user click on the serach button
  handleFormSubmit = event => {
    event.preventDefault();
      API.searchBooks(this.state.bookInput) // the searchBooks route is called with the title entedred by the user
        .then(res => this.setState({ books: res.data.items})) // res.data is an object, we need to add items
        .catch(err => console.log(err));
  };

  // When the user click on the save button
  handleSavedButton = id => {
    const book = this.state.books.find(book => book.id === id);

    API.saveBook({ // the saveBook route is called with the id of the book, the data will be inserted in the books collection
      key: book.id,
      title: book.volumeInfo.title,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail
    }).then(this.setState({ message: alert("Your book is saved") }));
  };

  render() {
    return (
      <div id="searchBooks">
        <Jumbotron />
        <Container>
          <Row>
            <Col size="md-12">
              <Input
                handleFormSubmit = {this.handleFormSubmit}
                handleInputChange = {this.handleInputChange}
              />
            </Col>
          </Row>
        </Container>
        <Container>
          
          <BookList>
            {this.state.books.map(book => {
              return (
                <BookListItem
                  key={book.id}
                  title={book.volumeInfo.title}
                  link={book.volumeInfo.infoLink}
                  authors={book.volumeInfo.authors}
                  description={book.volumeInfo.description}
                  image={book.volumeInfo.imageLinks.thumbnail}
                  Button={() => (
                    <button onClick={() => this.handleSavedButton(book.id)}>Save</button>
                  )}
                />
              );
                  })}
          </BookList>
        </Container>
      </div>
    )
  }
}
          
export default Search;
