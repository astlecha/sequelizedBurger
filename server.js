var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

var port = process.env.port || 3000;

var app = express();

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

// Set Handlebars.
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//Import routes and give the server access to them.
var routes = require('./controllers/burgers_controller.js');

app.use('/', routes);

//Port listener
app.listen(port);
console.log('Listening on port ', port);