import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron"
import Button from "../components/Button"
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";
import { List, ListItem } from "../components/List";
import { Link } from "react-router-dom";
import "./style.css";
import API from "../utils/API";
import { throws } from "assert";


class Books extends Component {
    state = {
        booksearch: "",
        books: [],
        title: "",
        author: "",
        description: "",
        thumbnail: "",
        href: ""
    };

componentDidMount() {
    this.loadBooks();
}

    loadBooks = () => {
        this.setState({ booksearch: ""})
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

      
  handleFormSubmit = event => {
    event.preventDefault();
    // get book from api
    API.searchAll(this.state.booksearch)
    // set book to state so they can render
      .then(({ data: { items }}) => 
        this.setState({ books: items })
      )
      .catch(err => console.log(err));

  };

  // book => saves book to API
  onClickSave = book => API.saveBook(book)
    .then(res => console.log(res.data))
    .catch(err => console.log(err.response.data));
  
  render() {
    return (
      <div>
      <Container containerClassName="booksearch">
        <Col size="md-6">
        <h3 className="book-h3">Book Search: Enter a title here</h3>
        <Input
        value={this.state.booksearch}
        onChange={this.handleInputChange}
        className="book-input"
        name="booksearch"
        placeholder="Enter book name"
        />
         <Button
            onClick={this.handleFormSubmit}
            type="success"
            className="search-button"
             >
              Search
          </Button>
        </Col>
      </Container >
              {!this.state.books.length ? (
                <h1 className="text-center" style={{color: "white"}}>Search a book to display their matches</h1>
              ) : (
                <List>
      
                  {this.state.books.map((book, index) => (
                    <Container containerClassName = "bookList" key={index}>
                      <ListItem
                        title={book.volumeInfo.title}
                        author={book.volumeInfo.authors[0]}
                        href={book.volumeInfo.previewLink}
                        description={book.volumeInfo.description}
                        thumbnail={book.volumeInfo.imageLinks.smallThumbnail}
                        onClick={this.onClickSaved}
                      />
                    </Container>  
                  ))}
                </List>
              )}
  

                  </div>
    );
  }
  }
  
  export default Books;
  