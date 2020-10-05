import React from "react";
import { Jumbotron, Button, ListGroup } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const FaqScreen = () => {
  return (
    <>
      <Jumbotron>
        <div className="about-text">
          <h1 className="text-center mb-4">Timber Survival School</h1>
          <h3 className="text-center mb-4">Frequently Asked Questions</h3>
        </div>
        <ListGroup className="mb-4" variant="flush">
          <ListGroup.Item className="p-6 mt-3">
            <h4>Do you pay for transportation?</h4>
            <p>
              We do not provide or pay for transportation. We make
              recommendations for travel options to the specified course
              location.
            </p>
          </ListGroup.Item>
          <ListGroup.Item className="p-6 mt-3">
            <h4>What if I want to quit?</h4>
            <p>
              If during your course you no longer feel comfortable and would
              like the experience to end, please let your instructor know. We
              will gladly end the course but will not provide a refund for early
              termination.
            </p>
          </ListGroup.Item>
          <ListGroup.Item className="p-6 mt-3">
            <h4>Is this one on one training?</h4>
            <p>
              Yes. All courses are one on one with the instructor. If you would
              like to bring another person with you, he or she will also have to
              pay for the course. Each course has a maximum of 4 people
              including the instructor.
            </p>
          </ListGroup.Item>
          <ListGroup.Item className="p-6 mt-3">
            <h4>Are there any prerequisites to the courses?</h4>
            <p>
              There are no prerequisite requirements for our courses, however we
              recommend taking one of our courses before signing up for an
              advanced course.
            </p>
          </ListGroup.Item>
        </ListGroup>
        <p className="text-center">
          <LinkContainer to="/">
            <Button variant="dark">Choose a Course</Button>
          </LinkContainer>
        </p>
      </Jumbotron>
    </>
  );
};

export default FaqScreen;
