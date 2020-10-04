import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const AboutScreen = () => {
  return (
    <>
      <Jumbotron>
        <div className="about-text">
          <h1 className="text-center mb-4">Timber Survival School Courses</h1>
          <p>
            Beginner courses are taught by survival expert John Doe with over 15
            years of survival teaching experience in the various locations
            around the United States. Timber Survival School offers a set of
            survival courses engineered to teach you everything you need to know
            about wilderness survival, in a short amount of time. We will focus
            heavily on primitive skills and all courses will be hands on in the
            field. No power point. No classrooms. All dirt time in the field
            with full time survival instructors. This is all we do. Our goal as
            instructors is to make you capable of walking into the wilderness
            with just a knife and surviving indefinitely in comfort.
          </p>
          <p>
            Intermediate and advanced survival courses are taught by
            professional survivalist and veteran Joe Schmo who has over 20 years
            of practical survival experience in all areas of the planet.
          </p>
          <p>
            If you have any questions about which courses you should take or
            details, call us at (555) 912-1234
          </p>
        </div>
        <p>
          <LinkContainer to="/">
            <Button variant="dark">Choose a Course</Button>
          </LinkContainer>
        </p>
      </Jumbotron>
    </>
  );
};

export default AboutScreen;
