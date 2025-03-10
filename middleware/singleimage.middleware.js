const multer = require("multer");
const mimeTypes = require("../consts/index");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const randomName = `${Date.now()}${Math.random().toString(36)}${
      file.fieldname
    }_${file.originalname}`;
    cb(null, randomName);
  },
});

const fileFilter = (req, file, cb) => {
  if (mimeTypes.general.IMAGE_MIME_TYPES.includes(file.mimetype)) {
    cb(null, true);
    return;
  }
  return cb(new Error("Desteklenmeyen dosya biçimi!", false));
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: "5MB" },
}).single("image");

module.exports = upload;
