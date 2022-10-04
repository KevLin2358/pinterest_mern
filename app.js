const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const users = require("./routes/api/users");
const pins = require("./routes/api/pins");
const comments = require("./routes/api/comments");
const follows = require("./routes/api/follows");
const app = express();
const db = require('./config/keys').mongoURI;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  //.connect(mongoURI, options) 
  // {} is an object
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.get("/", (req, res) => 
  res.send("Hello World")
);
const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Server is running on port ${port}`));



app.use("/api/users", users);
app.use("/api/pins", pins);
app.use("/api/comments", comments);
app.use("/api/follows", follows);

