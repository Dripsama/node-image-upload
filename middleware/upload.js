const multer = require("multer");
const path = require("path");

// storage engine
const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, callback) => {
    return callback(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

//upload middleware
const upload = multer({
  //filter
  storage: storage,
  limits: {
    //size in bytes
    fileSize: 1000000,
  },
});

module.exports = upload;
