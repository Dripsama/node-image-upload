const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");

//need to be updated
router.get("/", (req, res) => {
  res.json("add react webapp here");
});

//upload routes
router.post("/upload", upload.single("images"), (req, res) => {
  let URL = req.protocol + "://" + req.get("host") + "/images";
  res.json({
    success: 1,
    profile_url: URL + `/${req.file.filename}`,
  });
});

module.exports = router;
