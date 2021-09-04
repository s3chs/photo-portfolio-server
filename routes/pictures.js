const express = require("express");
const router = express.Router();
const Picture = require("../models/Picture.js");

/* GET home page */
router.get("/china", (req, res, next) => {
  Picture.find({ category: "china" })
    .then((dbResponse) => {
      res.status(200).json(dbResponse);
    })
    .catch((dbErr) => {
      res.status(500).json(dbErr);
    });
});

router.get("/bali", (req, res, next) => {
  Picture.find({ category: "bali" })
    .then((dbResponse) => {
      res.status(200).json(dbResponse);
    })
    .catch((dbErr) => {
      res.status(500).json(dbErr);
    });
});

router.get("/friends", (req, res, next) => {
  Picture.find({ category: "friends" })
    .then((dbResponse) => {
      res.status(200).json(dbResponse);
    })
    .catch((dbErr) => {
      res.status(500).json(dbErr);
    });
});

router.get("/random", (req, res, next) => {
  Picture.find({ category: "random" })
    .then((dbResponse) => {
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
