import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import Input from "../components/Input";
import { BookListItem, BookList } from "../components/BookList";
// import CardResults from "../components/CardResults";
// import { Input, TextArea, FormBtn } from "../components/Form";


class Search extends Component {
  state = {
    books: [],
    bookInput: ""
  };


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log("book input: " + event.target.value);
    this.setState({ bookInput: event.target.value })
  };
  
  handleFormSubmit = event => {
    console.log("in HFS");
    event.preventDefault();
  
      console.log(this.state.bookInput);
      API.searchBooks(this.state.bookInput)
        .then(res => this.setState({ books: res.data.items})) // res.data is an object, we need to add items
        .catch(err => console.log(err));
  };

  handleSavedButton = id => {
    const book = this.state.books.find(book => book.id === id);

    API.saveBook({
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
      <div>
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
                    <button
                      onClick={() => this.handleSavedButton(book.id)}
                    >
                      Save
                    </button>
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
