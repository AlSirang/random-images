const express = require("express");
const imagesRouter = express.Router();

const { generateDataSet } = require("../lib/utilities");


imagesRouter.get("/", (req, res, next) => {

  const dataset = generateDataSet(10);
  res.status(200).json({
    data: dataset,
  });
});

module.exports = imagesRouter;
