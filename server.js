// Require depedencies
var express = require('express');
var bodyParser = require('body-parser');

//Establish port and express app
var port = process.env.port || 8080;
var app = express();

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("public"));

//Import routes and give the server access to them.
var routes = require('./controllers/burgers_controller.js');

// app.use('/', routes);
require("./app/routes/api-routes.js")(app);
require("./app/routes/html-routes.js")(app);

//Port listener synced with database
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});