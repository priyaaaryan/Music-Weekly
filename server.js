const exphbs = require("express-handlebars");
const routes = require("./routes");
const sequelize = require("./config/connection");
<<<<<<< HEAD
const session = require("express-session");
//Load the code for express into the express variable.
=======
const path = require('path');
const session = require('express-session');


const SequelizeStore = require('connect-session-sequelize')(session.Store);
>>>>>>> 686a21bdc2b1d7a7b3208f2b5ad919bf7106324c
const express = require("express");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

// Initialize (create) the express object.
const app = express();
const PORT = process.env.SERVER_PORT || 3001;
const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

const helpers = require('./utils/helpers');

const hbs = exphbs.create({ helpers });

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

//Load the code for express into the express variable.



app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
<<<<<<< HEAD
app.use(session(sess));
=======
app.use(express.static(path.join(__dirname, 'public')));
>>>>>>> 686a21bdc2b1d7a7b3208f2b5ad919bf7106324c

// turn on routes
app.use(routes);

/*app.post('./routes/api/upload-route.js',upload.single('profile'), function (req, res) {
    message : "Error! in file upload."
      if (!req.file) {
          console.log("No file received");
            message = "Error! in image upload."
          res.render('index',{message: message, status:'danger'});
      
        } else {
          console.log('file received');
          console.log(req);
          var sql = "INSERT INTO `file`(`name`, `type`, `size`) VALUES ('" + req.file.filename + "', '"+req.file.mimetype+"', '"+req.file.size+"')";
                  var query = db.query(sql, function(err, result) {
                     console.log('inserted data');
                  });
          message = "Successfully! uploaded";
          res.render('index',{message: message, status:'success'});
        }
  });*/

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  //One method/function that starts the server
  app.listen(PORT, () => console.log("Now listening on port " + PORT));
});
