const express = require("express");
const router = express.Router();
const imageController = require("../controllers/ImageController");
const upload = require("../helpers/multer");

router.get("/", imageController.index);
router.get("/:id", imageController.show);
router.post("/", upload.single("image"), imageController.store);
router.put("/:id", imageController.update);
router.patch("/:id", imageController.update);
router.delete("/:id", imageController.delete);

module.exports = router;
