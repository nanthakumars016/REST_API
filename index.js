require("dotenv").config();
const express = require("express");
const router = express.Router();
const Database = require("./db");
const bodyparser = require("body-parser");
const {
  postUser,
  getUser,
  getSingleUser,
  updateUser,
  deleteUser,
} = require("./controller/userController");

Database();
const app = express();

const PORT = process.env.PORT;

app.use(bodyparser.json());

app.post("/user", postUser);

app.get("/user", getUser);

app.get("/user/:id", getSingleUser);

app.put("/user/:id", updateUser);

app.delete("/user/:id", deleteUser);

app.listen(PORT, () => {
  console.log(`server is running on ${PORT} port...`);
});
