const express = require("express");
const app = express();
const multer = require("multer");
const cors = require("cors");
const PORT = process.env.PORT || 4000;

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
//upload routes
app.use("/", require("./routes/api"));
app.use("/images", express.static("upload/images"));

app.use(errHandler);
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
