const path = require("path");
const home = (req, res) => {
  return res.sendFile(path.join(`${__dirname}/../views/layouts/main.handlebars`));
};
module.exports = {
  getHome: home
};