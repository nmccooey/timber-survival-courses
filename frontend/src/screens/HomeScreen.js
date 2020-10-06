import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import Course from "../components/Course";

const HomeScreen = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const { data } = await axios.get("/api/courses");
      setCourses(data);
    };
    fetchCourses();
  }, []);

  return (
    <>
      <h1>Courses</h1>
      <Row>
        {courses.map((course) => (
          <Col key={course._id} sm={12} md={8} lg={4} xl={3}>
            <Course course={course} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
