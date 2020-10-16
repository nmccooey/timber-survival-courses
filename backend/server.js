import express from "express";
import dotenv from "dotenv";
import courses from "./data/courses.js";
import connectDB from "./config/db.js";
import colors from "colors";

dotenv.config();

// Test postgres connection.
connectDB
  .authenticate()
  .then(() => console.log("Postgres Connected".cyan.inverse))
  .catch((error) => console.log(`Error: ${error}`));

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
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
