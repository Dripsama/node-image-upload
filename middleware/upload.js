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
