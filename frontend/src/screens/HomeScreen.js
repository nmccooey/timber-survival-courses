import React from "react";
import { Row, Col } from "react-bootstrap";
import Course from "../components/Course";
import courses from "../courses";

const HomeScreen = () => {
  return (
    <>
      <h1>Courses</h1>
      <Row>
        {courses.map((course) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Course course={course} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
