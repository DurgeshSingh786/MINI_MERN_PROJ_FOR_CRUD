const express = require("express");
const dotenv = require("dotenv");
const app = express();
const morgan = require("morgan");
const bodyparser = require("body-parser");
const connectDB = require("./server/database/connection");
const port = 3000;

dotenv.config({ path: "config.env" });

const PORT = process.env.PORT || 8080;

//log request
app.use(morgan("tiny"));

//mongodb connection
connectDB();

//parse request to body-parser
app.use(bodyparser.urlencoded({ extended: true }));

//set view engine
app.set("view engine", "ejs");

//loading router.js file in server

app.use("/", require("./server/routes/router"));

app.listen(port, () => {
  console.log("listing on :${port}");
});
