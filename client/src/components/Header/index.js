import React from "react";
import "./style.css";
import { Col, Row, Container } from "../Grid";


function Header() {
  return (
    <Container containerClassName="header" >
    <div className ="header-box">
        <h1 className = "header-h1">(React) Google Book Search</h1>
        <h3 className = "header-h3">Search for and Save Books of Interest</h3>
    </div>
    </Container>
  );
}

export default Header;