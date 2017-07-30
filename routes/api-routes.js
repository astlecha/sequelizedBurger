// *********************************************************************************
// Set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Burger model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/posts/", function(req, res) {
    db.Burger.findAll({}).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });

  // Get rotue for retrieving a single post
  // app.get("/api/posts/:id", function(req, res) {
  //   db.Burger.findOne({
  //     where: {
  //       id: req.params.id
  //     }
  //   })
  //   .then(function(dbBurger) {
  //     res.json(dbBurger);
  //   });
  // });

  // POST route for saving a new post
  app.post("/api/posts", function(req, res) {
    console.log(req.body);
    db.Burger.create({
      burger_name: req.body.title,
    }).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });

  // // DELETE route for deleting posts
  // app.delete("/api/posts/:id", function(req, res) {
  //   db.Burger.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   })
  //   .then(function(dbBurger) {
  //     res.json(dbBurger);
  //   });
  // });

  // PUT route for updating posts
  app.put("/api/posts", function(req, res) {
    db.Burger.update({ devoured: true },
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });
};