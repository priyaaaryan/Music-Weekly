const router = require("express").Router();
const homeController = require("../controllers/home-controller");

router.get("/", homeController);
router.get("/blog", homeController);
router.get("/musician", homeController);
router.get("/classroom", homeController);
router.get("*", homeController);

module.exports = router;
