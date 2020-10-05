const express = require("express");
const courses = require("./data/courses");
const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("API Running");
});

app.get("/api/courses", (req, res) => {
  res.json(courses);
});

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((course) => course._id === req.params.id);
  res.json(course);
});

app.listen(PORT, console.log(`Server listening on port ${PORT}`));
