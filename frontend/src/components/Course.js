import React from "react";
import { Card, Button } from "react-bootstrap";

const Course = ({ course }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/course/${course._id}`}>
        <Card.Img src={course.image} variant="top" />
      </a>
      <Card.Body>
        <a href={`/course/${course._id}`}>
          <Card.Title as="div">
            <strong>{course.name}</strong>
          </Card.Title>
        </a>
        <Card.Text as="p">{course.description}</Card.Text>
        <Card.Text as="p">{course.length}</Card.Text>
        <Card.Text as="p">{course.location}</Card.Text>
        <Card.Text as="p">{course.date}</Card.Text>
        <Card.Text as="h3">${course.price}</Card.Text>
      </Card.Body>
      <Button variant="primary">Sign Up</Button>
    </Card>
  );
};

export default Course;
