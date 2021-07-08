const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const fs = require("fs").promises;
const tfnode = require("@tensorflow/tfjs-node");
const cocoSsd = require("@tensorflow-models/coco-ssd");
//need to be updated
router.get("/", (req, res) => {
  res.json("add react webapp here");
});

//upload routes
router.post("/upload", upload.single("images"), (req, res) => {
  let new_path = req.file.destination + "/" + req.file.filename;
  Promise.all([cocoSsd.load(), fs.readFile(new_path)])
    .then((results) => {
      const model = results[0];

      const imgTensor = tfnode.node.decodeImage(new Uint8Array(results[1]), 3);

      return model.detect(imgTensor);
    })
    .then((predictions) => {
      res.json(JSON.stringify(predictions, null, 2));
    });
});

module.exports = router;
