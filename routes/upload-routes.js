const router = require("express").Router();
const multer = require("multer");
const uploadAvatarController = require("../controllers/upload-avatar-controller");
const uploadAvatarMiddleware = require("../middleware/upload-avatar");
const uploadController = require("../controllers/upload-controller");
const userController = require("../controllers/users-controller");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

router.post(
  "/upload",
  uploadAvatarMiddleware.single("file"),
  uploadAvatarController.uploadFiles
);

module.exports = router;
