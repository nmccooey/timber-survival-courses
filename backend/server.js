import express from "express";
import dotenv from "dotenv";
import courses from "./data/courses.js";

dotenv.config();
const app = express();

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

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
