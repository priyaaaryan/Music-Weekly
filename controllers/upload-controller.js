const fs = require("fs");
const path = require("path");
const uploadController = {
  uploadAvatar: (req, res, next) => {
    res.send("This is the profile page!");
    // fs.writeFile("mweekly.jpg", req.file);
  },
};
module.exports = uploadController;
