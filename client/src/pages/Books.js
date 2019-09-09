import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron"
import Button from "../components/Button"
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";
import { List, ListItem } from "../components/List";
import { Link } from "react-router-dom";
import "./style.css";
import API from "../utils/API";


class Books extends Component {
    state = {
        booksearch: "",
        books: []
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
    // When the form is submitted, prevent its default behavior, get books and update the books state
    event.preventDefault();
    API.searchAll(this.state.booksearch)
     .then(res => this.setState({ books: res.data.items }))
      //  .then(res => console.log(res.data.items))
      .catch(err => console.log(err));
  };


  
  
  render() {
    return (
      <div>
      <Container containerClassName="booksearch">
        <Col size="md-6">
        Book Search
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
            className="input-lg"
             >
              Search
          </Button>
        </Col>
      </Container >
              {!this.state.books.length ? (
                <h1 className="text-center">Search a book to display their matches</h1>
              ) : (
                <List>
               
                  {this.state.books.map(book => {
                    return (
                      <Container containerClassName = "bookList">
                      <ListItem
                        key={book.volumeInfo.title}
                        title={book.volumeInfo.title}
                        href={book.volumeInfo.previewLink}
                        description={book.volumeInfo.description}
                        thumbnail={book.volumeInfo.imageLinks.smallThumbnail}
                      />
                    </Container>  
                    );
                  })}
                </List>
              )}
  

                  </div>
    );
  }
  }
  
  export default Books;
  