const express = require("express");
const app = express();
const multer = require("multer");
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
//upload routes
app.use("/", require("./routes/api"));

//using errorhandler
app.use(errHandler);
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
