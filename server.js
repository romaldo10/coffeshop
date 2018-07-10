var express = require('express');
var app= express();
var mongoose=require('mongoose');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');
var session = require('cookie-session');

var config = require('./config');

if(process.env.NODE_ENV!=='production'){
var morgan = require('morgan');
app.use(morgan('dev'));
mongoose.connect(config.database);

}else{
    mongoose.connect(config.database);
}

//body parse
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//confgurar aplicacion express
var port = process.env.PORT || 3000;

app.listen(port,function(){
console.log("Running localhost port:"+port);
})




