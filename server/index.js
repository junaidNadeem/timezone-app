const express = require("express");
const bodyParser = require("body-parser");
var MongoClient = require("mongodb").MongoClient;
const app = express();

require("./startup/cors")(app);
require("./startup/db")();

var url = "mongodb://localhost:27017/";

MongoClient.connect(url).then((client) => {
  db = client.db("time");

  app.use(bodyParser.urlencoded({ extended: false }));

  app.get("/", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    const data = db.collection("Time").find();
    data
      .toArray()
      .then((result) => {
        res.send(result);
      })
      .catch((error) => console.error(error));
  });

  app.listen(3001, () =>
    console.log("Express server is running on localhost:3001")
  );
});
