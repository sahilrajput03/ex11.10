// deployed @ https://simple-app-11-10.herokuapp.com/
var cors = require("cors");
const express = require("express");
const app = express();

app.use(cors());
app.use(express.json());

let log = console.log;

app.get("/", (req, res) => {
  res.send("My blog app");
  // res.status(201).send('If you want to send custom status code.');
});

// /health and /version are endpoints for testing via CI.
app.get("/health", (req, res) => {
  res.send("ok");
});

app.get("/version", (req, res) => {
  res.send("1"); // change this string to ensure a new version deployed
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, function () {
  console.log(`server running on ${PORT}`);
}); //the server object listens on port 8080
