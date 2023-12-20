require("dotenv").config();
const express = require("express");

const app = express();
const PORT = process.env.PORT;

app.get('/', (req, res) => {
  res.send("Work");
});

const start = () => {
  try {
    app.listen(PORT, () => console.log(`Server is starting at port ${PORT}`))
  } catch (error) {
    console.log(error);    
  }
}

start();