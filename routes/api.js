const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");

//need to be updated
router.get("/", (req, res) => {
  res.json("add react webapp here");
});

//upload routes
router.use("/profile", express.static("../upload/images"));


module.exports = router;
