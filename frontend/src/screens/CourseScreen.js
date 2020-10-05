import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import courses from "../courses";

const CourseScreen = ({ match }) => {
  const course = courses.find((course) => course._id === match.params.id);
  return (
    <>
      <Row>
        <h2 className="mx-auto mt-3 text-uppercase">{course.name}</h2>
      </Row>
      <hr className="" />
      <Row>
        <Col className="p-3" md={3}>
          <Image src={course.image} alt={course.name} fluid></Image>
        </Col>

        <Col className="p-3" md={6}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <p>Length: {course.length}</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>Location: {course.location}</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>Description: {course.description}</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>Date: {course.date}</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={3}>
          <Card>
            <ListGroup varient="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${course.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button className="btn-block btn-success" type="button">
                  Sign Up
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
      <Link className="btn btn-dark my-3" to="/">
        Go Back
      </Link>
    </>
  );
};

export default CourseScreen;
