// see http://vuejs-templates.github.io/webpack for documentation.
var path     = require('path')
var express  = require('express')
var logger   = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')
var Restful = require('./restful').Restful
var Uploadimage = require('./uploadimage').Uploadimage
var app      = express ()
const rewrite = require('express-urlrewrite')


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.query());
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(methodOverride());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



new Restful(app)
new Uploadimage(app)

module.exports = {
	app:app,
  express:express,
  rewrite:rewrite
}
