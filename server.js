var express = require('express');
var app = express();
var mongoose  = require('mongoose');
var bodyParser = require('body-parser');
var routes = require('./app/routes/routes.js');

var userModel = require('./app/model/user.js')

mongoose.connect('mongodb://localhost:27017/contact_app');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(__dirname+'/public',{redirect:false}));

routes(app,mongoose,userModel);

app.listen(3000,function(){
	console.log("Server Started, Port : 3000");

});