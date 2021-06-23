const express = require("express");
const app = express();
const multer = require("multer");
const cors = require("cors");
const PORT = process.env.PORT || 4000;

//error handler
function errHandler(err, req, res, next) {
  if (err instanceof multer.MulterError) {
    res.json({
      success: 0,
      message: err.message,
    });
  }
}
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
});
//upload routes
app.use("/", require("./routes/api"));

//using errorhandler
app.use(errHandler);
app.use(cors);
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
