const express = require("express");
const app = express();
const multer = require("multer");
const cors = require("cors");
const PORT = process.env.PORT || 4000;
const fs = require("fs").promises;
const tfnode = require("@tensorflow/tfjs-node");
const cocoSsd = require("@tensorflow-models/coco-ssd");
// const image = require("./soulking.jpg");

//cors needs to enabled before all the routes
app.use(cors());
//error handler
function errHandler(err, req, res, next) {
  if (err instanceof multer.MulterError) {
    res.json({
      success: 0,
      message: err.message,
    });
  }
}
// Promise.all([cocoSsd.load(), fs.readFile("./index.jpg")])
//   .then((results) => {
//     // First result is the COCO-SSD model object.
//     const model = results[0];
//     // Second result is image buffer.
//     const imgTensor = tfnode.node.decodeImage(new Uint8Array(results[1]), 3);
//     return model.detect(imgTensor);
//   })
//   .then((predictions) => {
//     console.log(JSON.stringify(predictions, null, 2));
//   });

//upload routes
app.use("/", require("./routes/api"));
app.use("/images", express.static("upload/images"));

app.use(errHandler);
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
