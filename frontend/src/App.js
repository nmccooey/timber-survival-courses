import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import CourseScreen from "./screens/CourseScreen";
import AboutScreen from "./screens/AboutScreen";
import FaqScreen from "./screens/FaqScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/course/:id" component={CourseScreen} />
          <Route path="/about" component={AboutScreen} exact />
          <Route path="/faq" component={FaqScreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
