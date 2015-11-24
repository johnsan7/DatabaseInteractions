

var mysql = require('mysql');
var pool = mysql.createPool(
{
	host: 'localhost',
	user: 'student',
	password: 'default',
	database: 'student'

});

//This code, var express through app.set('port',3000) is code from lectures and the class. The implementation that I have is the exact same as the lectures


var express = require('express');

var app = express();

var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var bodyParser = require('body-parser');
var session = require('express-session');

var request = require('request');

var apiKey = '&APPID=b7654c8bb48353daff52709b5b9c3475';
var baseUrl = 'http://api.openweathermap.org/data/2.5/weather?zip='

app.use(session({  
	secret: 'SuperSecretPassword',
	saveUninitialized: true,
	resave: true
}));

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());




app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 3000);


app.get('/reset-table',function(req,res,next){
  var context = {};
  [your connection pool].query("DROP TABLE IF EXISTS todo", function(err){ //replace your connection pool with the your variable containing the connection pool
    var createString = "CREATE TABLE workouts("+
    "id INT PRIMARY KEY AUTO_INCREMENT,"+
    "name VARCHAR(255) NOT NULL,"+
    "reps INT,"+
    "weight INT,"+
    "date DATE,"+
    "lbs BOOLEAN)";
    mysql.pool.query(createString, function(err){
      context.results = "Table reset";
      res.render('home',context);
    })
  });
});



