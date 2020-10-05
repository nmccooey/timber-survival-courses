import React from "react";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Card, Button } from "react-bootstrap";

const Course = ({ course }) => {
  return (
    <Card bg="light" className="my-3 p-2 rounded">
      <Link to={`/course/${course._id}`}>
        <Card.Img src={course.image} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`/course/${course._id}`}>
          <Card.Title as="div">
            <strong>{course.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="p">{course.description}</Card.Text>
        <Card.Text as="p">
          <strong>Length: </strong>
          {course.length}
        </Card.Text>
        <Card.Text as="p">
          <strong>Location: </strong>
          {course.location}
        </Card.Text>
        <Card.Text as="p">
          <strong>Starts: </strong>
          {course.date}
        </Card.Text>
        <Card.Text as="h3">${course.price}</Card.Text>
      </Card.Body>
      <LinkContainer to={`/course/${course._id}`}>
        <Button variant="dark">Learn More</Button>
      </LinkContainer>
    </Card>
  );
};

export default Course;
