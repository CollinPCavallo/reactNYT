const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/nytReact";
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

require('./routes/Api')(app)

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
