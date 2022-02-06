const express = require('express');
const router = express.Router();
const multer = require("multer");


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/images')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname)
  }
})
const upload = multer({
  storage: storage,
  limits: {
    fieldSize: 1024 * 1024 * 3,
  },
})


const {  getImage, getAllImage, uploadImage} = require('../controllers/images')

router.route("/:imageId").get(getImage);
router.route("/").get(getAllImage);
router.route("/").post(upload.single("image"), uploadImage);

module.exports = router;