const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

//body parser
app.use(express.json());

//form parser
app.use(express.urlencoded({ extended: false }));

require("./config/database").connect();
console.log(__dirname);

//route import and mount
const user = require("./routes/user");
app.use("/api/v1", user);

//server activate
app.listen(PORT, () => {
  console.log(`Server started succesfully at ${PORT}`);
});

//default
app.get("/", (req, res) => {
  res.send("<h1>first</h1>");
});
