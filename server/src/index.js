require("dotenv").config();
const express = require("express");
const userRouter = require("./routes/user.routes");

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Work");
});

app.use("/api", userRouter);

const start = () => {
  try {
    app.listen(PORT, () => console.log(`Server is starting at port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
