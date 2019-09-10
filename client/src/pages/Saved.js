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

class Saved extends Component {
    state = {
        books: {}
    };

    componentDidMount() {
        API.getBooks()
        .then(res => this.setState({ books: res.data }))
        .catch(err => console.log(err.response.data));
    }

    
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
                    
                    <h1>{books.title}</h1>
                    <h1>{books.title}</h1>
                    <p>{books.description}</p>
            
                </Container>  
                );
              })}
            </List>
          )}
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Authors</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Saved;
