require("dotenv").config();
const express = require("express");
const db = require("./db.test");
const userRouter = require("./routes/user.routes");

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use("/api", userRouter);

const start = () => {
  try {
    /*db.authenticate();
    db.sync();*/
    app.listen(PORT, () => console.log(`Server is starting at port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
