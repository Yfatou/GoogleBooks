import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";

// Exporting both BookList and BookListItem from this file

// BookList renders a bootstrap list item
export function BookList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// BookListItem renders a bootstrap list item containing data from the Google Books api call
export function BookListItem({
  key,
  title,
  authors,
  description,
  image,
  link,
  Button

}) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-5 sm-3">
            <Thumbnail src={image} />
          </Col>
          <Col size="xs-7 sm-9">
            <h3>{title}</h3>
            <h4>{authors}</h4>
            <p> Description: { description}</p>
            <a className = "btn btn-dark" rel="noreferrer noopener" target="_blank" href={link}>View</a>
            <Button className = "btn btn-dark" />
          </Col>
        </Row>
      </Container>
    </li>
  );
}

