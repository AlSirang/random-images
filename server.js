const express = require("express");
const app = express();
const CORS = require("cors");
const logger = require("morgan");
const PORT = process.env.PORT || 8080;

app.use(logger("dev"));
app.use(CORS());

app.use("/", require("./routes/index"));

app.listen(
  PORT,
  console.log(`server is listining at http://localhost:${PORT}`)
);
