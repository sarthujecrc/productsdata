const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");
const ConnectDb = require("./Db/Connect.js");
const dotenv = require("dotenv");
dotenv.config();
const routes = require("./Routes/index.js");

//
app.use(express.json());
app.use(cors());
app.use(morgan());
app.use("/api/v1", routes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

//
ConnectDb();

app.listen(5500, () => {
  console.log(`app is running on http://localhost:5500`);
});
