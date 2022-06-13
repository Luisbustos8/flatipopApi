const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const connectDB = require("./database/connectdb");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(morgan("tiny"));
app.use(cors());

// Connect mongoDB
connectDB();

app.use(express.json());
// parse request to body-parser
app.use(bodyparser.urlencoded({ extended: true }));

// set view engine
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views/ejs"));

// load assets
app.use("/css", express.static(path.resolve(__dirname, "public/css")));
app.use("/img", express.static(path.resolve(__dirname, "public/img")));
app.use("/js", express.static(path.resolve(__dirname, "public/js")));

// load routers
app.use("/", require("./routes/router"));

//body parse middleware

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
