import React from "react";
import "./style.css";
import { Col, Row, Container } from "../Grid";


function Nav() {
  return (
      <div className ="Nav-box">
      <Container fluid>
      <Row>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <h3>Google Books</h3>
      <a className="navbar-brand" href="/">
        Search
      </a>
      <a className="navbar-brand" href="/saved">
        Saved
      </a>
    </nav>
    </Row>
    </Container>
    </div>
  );
}

export default Nav;