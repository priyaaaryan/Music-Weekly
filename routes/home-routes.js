const router = require("express").Router();
const homeController = require("../controllers/home-controller");

router.get("/", homeController);
router.get("*", homeController);

module.exports = router;
