//Router() is a constructor function.
const router = require('express').Router();
const uploadRoutes = require('./upload-routes.js');
router.use('/upload', uploadRoutes);

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;

