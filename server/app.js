const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
// const fileUpload = require("express-fileupload");

// app.use(fileUpload());
app.set("view engine", "ejs");
app.use(cors());
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ extended: true }));
// app.use('/upload_file', express.static('upload_file'));

app.use("/api/v1/auth/", require("./api/api_auth"));

app.get('/', (req, res) => {
  res.send("Welcome to the home page");
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log("Server is running ...");
});
