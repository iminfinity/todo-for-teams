const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

// Mongoose Configurations for mongoDb Atlas

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection
  .once("open", () => {
    console.log("MongoDB Running");
  })
  .catch((error) => console.log("Error: ", error));
// ----------------------------------

const todoRouter = require("./routes/todo.routes");
app.use("/todo", todoRouter);

// Heroku config
app.use(express.static(path.join(__dirname, "client", "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
// -------------------------------------------
app.listen(port, () => {
  console.log("Node Server Running");
});
