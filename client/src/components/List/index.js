import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
import Button from "../Button"

// Exporting both RecipeList and RecipeListItem from this file

// RecipeList renders a bootstrap list item
export function List({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export function ListItem({
  thumbnail = "https://placehold.it/300x300",
  title,
  description,
  href,
  author,
  onClick
}) {
  console.log(author)
  return (
    <li className="list-group-item">
      <Container >
        <Row>
          <Col size="" >
            <img src={thumbnail} />
            <h3>{title}</h3>
            <h2>{author}</h2>
            <p>Description: {description}</p>



            <form action={href} className="searchbook-link" >
              <button
                onClick= {href}
                type="success"
                className="input-lg"
                >
                  View
              </button>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  onClick({
                  thumbnail,
                  title,
                  description,
                  href,
                  author
                })
              }
              }
                type="success"
                className="input-lg"
                >
                  Save
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    </li>
  );
}

