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
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
});
//upload routes
app.use("/", require("./routes/api"));
app.use("/images", express.static("upload/images"));

app.use(errHandler);
app.use(cors);
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
