const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Picture = require("../models/Picture.js");

router.get("/:id", (req, res, next) => {
  Picture.find({ category: req.params.id })
    .then((dbResponse) => {
      console.log(dbResponse);
      res.status(200).json(dbResponse);
    })
    .catch((dbErr) => {
      res.status(500).json(dbErr);
    });
});

router.post("/", function (req, res, next) {
  Picture.create(req.body)
    .then((dbResponse) => {
      res.status(201).json(dbResponse);
    })
    .catch((dbErr) => {
      res.status(500).json(dbErrw);
    });
});

module.exports = router;
