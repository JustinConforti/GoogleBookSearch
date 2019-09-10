import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn"
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Link } from "react-router-dom";
import "./style.css";
import API from "../utils/API";
import { throws } from "assert";

class Saved extends Component {
    state = {
        books: {}
    };

    componentDidMount() {
        API.getBooks()
        .then(res => this.setState({ books: res.data }))
        .catch(err => console.log(err.response.data));
    }
    deleteBook = id => {
      API.deleteBook(id)
        .then(res => this.componentDidMount())
        .catch(err => console.log(err));
    };

    
  render() {
    return (
 
      <Container fluid>
              {!this.state.books.length ? (
            <h1 className="text-center">Save a book to display them here</h1>
          ) : (
            <List>
           
              {this.state.books.map(books => {
                return (
                  <Container containerClassName = "bookList">
                    <div className ="thumbnail">
                    <img src ={books.thumbnail} />
                    </div>
                    <div className = "content">
                    <h1>Title: {books.title}</h1>
                    <h1>Author: {books.author}</h1>
                    <div className ="plot">
                    <p>{books.description}</p>
                    </div>
                  </div>
                  <form action = {books.href} className="book-link" >
                  <button
            onClick= {books.href}
            type="success"
            className="input-lg"
             >
              View
          </button>
          </form>
          <DeleteBtn onClick={() => this.deleteBook(books._id)} />
          <Row>
          <Col size="md-12">
            <Link to="/">← Back to Book Search</Link>
          </Col>
        </Row>
                </Container>  
                
                );
                
              })}
            </List>
          )}
        
      </Container>
    );
  }
}

export default Saved;
