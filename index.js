// deployed @ https://simple-app-11-10.herokuapp.com/
var cors = require("cors");
https: const express = require("express");
const app = express();

app.use(cors());
app.use(express.json());

let log = console.log;

app.get("/", (req, res) => {
  res.send("My blog app");
  // res.status(201).send('If you want to send custom status code.');
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, function () {
  console.log(`server running on ${PORT}`);
}); //the server object listens on port 8080
