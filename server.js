// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================

var express = require("express");
var bodyParser = require("body-parser");
var passport = require('passport');
var session = require('express-session');
var bodyParser = require('body-parser');
var env = require('dotenv').load();
var exphbs = require('express-handlebars'); // set up view
var path = require('path');
var publicPath =  path.join(__dirname, './app/public');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing

// Routes
// =============================================================

require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);
// require('autoloader')(__dirname + '/src');
// import this route in our server.js and pass app as an argument.
//load passport strategies : below route import


// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use('/', express.static(publicPath));
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("./public"));

//For Handlebars
app.set('views', './views')
// app.engine("hbs", exphbs({ defaultLayout: "main" }));
app.engine('hbs', exphbs({
    extname: '.hbs'
}));

app.set('view engine', '.hbs');

app.get('/', function(req, res) {

    // res.send('Welcome to Passport with Sequelize');
res.render('signup.hbs');
});
//test
app.get('/home', function(req, res) {
  res.render('main.hbs');
})

app.get('/signin',function(req, res) {
  res.render('form.hbs');
});

var db = require("./models");

var authRoute = require('./routes/auth.js')(app,passport);

require("./config/passport.js")(passport, db.user);
// For Passport

app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret

app.use(passport.initialize());

app.use(passport.session()); // persistent login sessions



// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
