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
  onClick
}) {
  return (
    <li className="list-group-item">
      <Container >
        <Row>
          <Col size="" >
            <img src={thumbnail} />
            <h3>{title}</h3>
            <p>Description: {description}</p>
            <a rel="noreferrer noopener" target="_blank" href={href}>
              View
            </a>
            <Button
                        onClick={onClick}
                        type="success"
                        className="input-lg"
                        >
                          Save
                        </Button>
          </Col>
        </Row>
      </Container>
    </li>
  );
}