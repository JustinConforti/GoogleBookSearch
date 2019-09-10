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
    // When the form is submitted, prevent its default behavior, get books and update the books state
    event.preventDefault();
    API.searchAll(this.state.booksearch)
      .then(res => this.setState({ books: res.data.items }))
      // .then(res => console.log(res.data.items))
      .catch(err => console.log(err));
  };

    saveClicked = (event) => {
      event.preventDefault();
      console.log(event.currentTarget.parentNode)
      let savedTitle = (event.currentTarget.parentNode.querySelector('h3').innerHTML) 
      let savedAuthor = (event.currentTarget.parentNode.querySelector('h2').innerHTML) 
      let savedDesc = (event.currentTarget.parentNode.querySelector('p').innerHTML)
      let savedThumbnail = (event.currentTarget.parentNode.querySelector("img")) 
      let savedHref = (event.currentTarget.parentNode.querySelector("a").href)
       console.log(savedHref)
      this.setState({ title: savedTitle, author: savedAuthor, description: savedDesc, thumbnail: savedThumbnail.src, href: savedHref })
      if (this.state.title) {
      this.changeSaved();
      } else {
        setTimeout(() => {
        this.changeSaved();
      }, 8000);
    };
  }

    changeSaved = () => {
      if (this.state.title) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        description: this.state.description,
        thumbnail: this.state.thumbnail,
        href: this.state.href
    })
    .then(res => console.log(res.data))
    // .then(res => this.setState({ title: "", author: "", description: "" }))
    .catch(err => console.log(err.response.data));
  }

    }

  
  
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
               
                  {this.state.books.map(book => {
                    return (
                      <Container containerClassName = "bookList">
                        
                      <ListItem
                        key={book.volumeInfo.title}
                        title={book.volumeInfo.title}
                        author={book.volumeInfo.authors}
                        href={book.volumeInfo.previewLink}
                        description={book.volumeInfo.description}
                        thumbnail={book.volumeInfo.imageLinks.smallThumbnail}
                        onClick={this.saveClicked}
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
  