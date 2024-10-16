const multer = require("multer");
const path = require("path");
const crypto = require("crypto");

//diskstorage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join("./Backend/public/images"));
  },
  filename: function (req, file, cb) {
    crypto.randomBytes(12, function (err, name) {
      if (err) {
        console.log(err);
      }

      const fn = name.toString("hex") + path.extname(file.originalname);
      cb(null, fn);
    });
  },
});

const upload = multer({ storage: storage });
//export  upload variable
module.exports = upload;
