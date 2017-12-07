//*****************************************
//html routes
//*****************************************

//dependencies
//========================================

var path = require("path");
var exphbs = require('express-handlebars'); // set up view


//routes
//========================================

module.exports = function(app){
	//For Handlebars
app.set('views', './views')
// app.engine("hbs", exphbs({ defaultLayout: "main" }));
app.engine('hbs', exphbs({
    extname: '.hbs'
}));

app.set('view engine', '.hbs');
	//index route for index.html
	app.get("/", function(req, res){
	 res.render('signup.hbs');
	});

	//index route for add.html
	app.get("/add", function(req, res){
		res.render('form.hbs');
	});

		//index route for index.html
	app.get("/all", function(req, res){
		res.render('form.hbs');;
	});
}
