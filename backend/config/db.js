import Sequelize from "sequelize";

const connectDB = new Sequelize(
  "timber-survival-school",
  "postgres",
  "airplane",
  {
    host: "localhost",
    dialect: "postgres",
  }
);

export default connectDB;
