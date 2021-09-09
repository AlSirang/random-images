const express = require("express");
const indexRouter = express.Router();

indexRouter.use("/images", require("../api/images"));

module.exports = indexRouter;
