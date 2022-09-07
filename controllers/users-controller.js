const { User } = require("../models");

const usersController = {
  loadAllUsersPage: (req, res) => {
    User.findAll({
      attributes: { exclude: ["password"] },
    })
      .then((dbUserData) => {  
        console.log(dbUserData[0].get({plain:true}));
        const musicians = dbUserData.map(user => user.get({plain:true}));
        res.render('musicians', {musicians});
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  loadSingleUserPage: (req, res) => {
    User.findOne({
      attributes: { exclude: ["password"] },
      where: {
        id: req.params.id,
      },
    })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  updateUser: (req, res) => {
    // expects {username: 'Lernantino', password: 'password1234'}

    // if req.body has exact key/value pairs to match the model, you can just use `req.body` instead
    User.update(req.body, {
      //Ensures the hook gets used
      individualHooks: true,
      where: {
        id: req.params.id,
      },
    })
      .then((dbUserData) => {
        if (!dbUserData[0]) {
          res.status(404).json({ message: "No user found with this id" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  deleteUser: (req, res) => {
    User.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  createUser: (req, res) => {
     User.create({
      username: req.body.Username,
      password: req.body.password[0],
      email: req.body.email,
      bio: req.body.bio
  })
    .then(dbUserData => {
      // req.session.save(() => {
      //   req.session.user_id = dbUserData.id;
      //   req.session.username = dbUserData.username;
      //   req.session.loggedIn = true;
      res.render('blog');
        //res.json(dbUserData);
      })
        .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  },

  loadLoginPage: (req, res) => {
    if (req.session.loggedIn) {
      res.redirect("/");
      return;
    }

    res.render("login");
  },

  login: (req, res) => {
    // expects {username: 'lernant', password: 'password1234'}
    User.findOne({
      where: {
        username: req.body.username,
      },
    }).then((dbUserData) => {
      if (!dbUserData) {
        res.status(400).json({ message: "No user with that name!" });
        return;
      }

      //res.json({ user: dbUserData });

      // Verify user
      const isValidPassword = dbUserData.checkPassword(req.body.password);
      if (!isValidPassword) {
        res.status(400).json({ message: "Incorrect password!" });
        return;
      }
    req.session.save(() => {
                req.session.user_id = dbUserData.id;
                req.session.username = dbUserData.username;
                req.session.loggedIn = true;

                res.json({
                    user: dbUserData,
                    message: 'You are now logged in'
                });
            });
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
  },

  loadSignUpPage: (req, res) => {
    if (req.session.loggedIn) {
      res.redirect("/");
      return;
    }

    res.render("signup");
  },
};
module.exports = usersController;
