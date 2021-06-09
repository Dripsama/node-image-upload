const express = require("express");
const app = express();
const multer = require("multer");
const path = require("path");
const PORT = process.env.PORT || 4000;

// storage engine

app.use("/profile", express.static("upload/images"));
app.post("/upload", upload.single("images"), (req, res) => {
  let URL = req.protocol + "://" + req.get("host") + "/images";
  res.json({
    success: 1,
    profile_url: URL + `/${req.file.filename}`,
  });
});

function errHandler(err, req, res, next) {
  if (err instanceof multer.MulterError) {
    res.json({
      success: 0,
      message: err.message,
    });
  }
}

app.use(errHandler);
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
