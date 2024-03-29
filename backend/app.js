const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
//need to load the routes , the routes are bound to the file , so , user/123 will be a specific route

const users = require("./routes/api/users");
const pins = require("./routes/api/pins");
const comments = require("./routes/api/comments");
const follows = require("./routes/api/follows");
const boards = require("./routes/api/boards");
const saves = require("./routes/api/saves");
const search = require("./routes/api/search");

const app = express();
const db = require('./config/keys').mongoURI;


app.use(passport.initialize());
require('./config/passport')(passport);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  //.connect(mongoURI, options) 
  // {} is an object
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));


const http = require("http")
const {Server} = require('socket.io')
const cors = require("cors")
app.use(cors())
const server = http.createServer(app)
const io = new Server(server, {
  cors: {
    origin:"http://localhost:3000",
    // methods: ["GET","POST"]
  }
})

io.on("connection", (socket) => {
  console.log(socket.id)
  socket.on("send_message", (data) => {
    // console.log(data)
  })

})
console.log(io)

server.listen(3001, () => {
  console.log("SERVER IS RUNNING");
});
const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Server is running on port ${port}`));



app.use("/api/users", users);
app.use("/api/pins", pins);
app.use("/api/comments", comments);
app.use("/api/follows", follows);
app.use("/api/boards", boards);
app.use("/api/saves", saves);
app.use("/api/search", search);

