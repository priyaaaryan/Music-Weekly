//Router() is a constructor function.
const router = require("express").Router();
const homeRoutes = require("./home-routes.js");
const dashboardRoutes = require("./dashboard-routes.js");

const apiRoutes = require("./api");

router.use("/api", apiRoutes);
router.use("/home", homeRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/",homeRoutes);
router.use("*",homeRoutes);

router.use((req, res) => {
  res.status(404).end();
});
module.exports = router;
