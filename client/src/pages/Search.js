import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import Input from "../components/Input";
// import Button from "../components/Button";
import { BookListItem, BookList } from "../components/BookList";
// import CardResults from "../components/CardResults";
// import { Input, TextArea, FormBtn } from "../components/Form";


class Search extends Component {
  state = {
    books: [],
    bookInput: ""
  };

  
  // componentDidMount() {
  //   this.loadBooks();
  // }

  // loadBooks = () => {
  //   API.getBooks()
  //     .then(res =>
  //       this.setState({ books: res.data, title: "", author: "", synopsis: "" })
  //     )
  //     .catch(err => console.log(err));
  // };

  // deleteBook = id => {
  //   API.deleteBook(id)
  //     .then(res => this.loadBooks())
  //     .catch(err => console.log(err));
  // };

  handleInputChange = event => {
    // const { name, value } = event.target;
    // this.setState({
    //   [name]: value
    // });
    console.log("book input: " + event.target.value);
    this.setState({ bookInput: event.target.value })
  };
  
  handleFormSubmit = event => {
    console.log("in HFS");
    event.preventDefault();
  
      console.log(this.state.bookInput);
      API.searchBooks(this.state.bookInput)
        .then(res => this.setState({ books: res.data.items})) // res.data is an object, we need to add items
        // .catch(err => console.log(err));
    // }
      
      
        .catch(err => console.log(err));
  };


  handleSavedButton = event => {
    event.preventDefault();
    let savedBooks = this.state.books.filter(book => book.id === event.target.id)
    savedBooks = savedBooks[0];
    API.saveBook(savedBooks)
      // .then(this.setState({ message: alert("Your book is saved") }))
      .catch(err => console.log(err))
  }

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
                />
              );
            })}
             <button
            type="submit" className = "btn btn-lg btn-secondary" onClick={this.handleSavedButton}>Save</button>
          </BookList>
        </Container>
      </div>
    )
  }
}
          
export default Search;


// import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";

// class Books extends Component {
//   state = {
//     books: [],
//     title: "",
//     author: "",
//     synopsis: ""
//   };

//   componentDidMount() {
//     this.loadBooks();
//   }

//   loadBooks = () => {
//     API.getBooks()
//       .then(res =>
//         this.setState({ books: res.data, title: "", author: "", synopsis: "" })
//       )
//       .catch(err => console.log(err));
//   };

//   deleteBook = id => {
//     API.deleteBook(id)
//       .then(res => this.loadBooks())
//       .catch(err => console.log(err));
//   };

//   handleInputChange = event => {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value
//     });
//   };

//   handleFormSubmit = event => {
//     event.preventDefault();
//     if (this.state.title && this.state.author) {
//       API.saveBook({
//         title: this.state.title,
//         author: this.state.author,
//         synopsis: this.state.synopsis
//       })
//         .then(res => this.loadBooks())
//         .catch(err => console.log(err));
//     }
//   };

//   render() {
//     return (
//       <Container fluid>
//         <Row>
//           <Col size="md-6">
//             <Jumbotron>
//               <h1>What Books Should I Read?</h1>
//             </Jumbotron>
//             <form>
//               <Input
//                 value={this.state.title}
//                 onChange={this.handleInputChange}
//                 name="title"
//                 placeholder="Title (required)"
//               />
//               <Input
//                 value={this.state.author}
//                 onChange={this.handleInputChange}
//                 name="author"
//                 placeholder="Author (required)"
//               />
//               <TextArea
//                 value={this.state.synopsis}
//                 onChange={this.handleInputChange}
//                 name="synopsis"
//                 placeholder="Synopsis (Optional)"
//               />
//               <FormBtn
//                 disabled={!(this.state.author && this.state.title)}
//                 onClick={this.handleFormSubmit}
//               >
//                 Submit Book
//               </FormBtn>
//             </form>
//           </Col>
//           <Col size="md-6 sm-12">
//             <Jumbotron>
//               <h1>Books On My List</h1>
//             </Jumbotron>
//             {this.state.books.length ? (
//               <List>
//                 {this.state.books.map(book => (
//                   <ListItem key={book._id}>
//                     <Link to={"/books/" + book._id}>
//                       <strong>
//                         {book.title} by {book.author}
//                       </strong>
//                     </Link>
//                     <DeleteBtn onClick={() => this.deleteBook(book._id)} />
//                   </ListItem>
//                 ))}
//               </List>
//             ) : (
//               <h3>No Results to Display</h3>
//             )}
//           </Col>
//         </Row>
//       </Container>
//     );
//   }
// }

// export default Books;

