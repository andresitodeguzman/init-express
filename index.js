/*
Andresito de Guzman
Init-Express
*/
var express = require('express');
app = express();

app.get('/', function(req, res){
	
		res.send("Welcome!");
	
});