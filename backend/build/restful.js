var restful = require('node-restful')
var mong = require('mongoose')
var ObjectID = mong.Types.ObjectId


function Restful(app){
	var mongoose = restful.mongoose
  mongoose.connect("mongodb://localhost/resoruces")	

  var Resource = app.resource = restful.model(
		'resource', mongoose.Schema({
    title: String,
    content:String,
    coverimg:String,
    createdate :Date,
    year: Number,
  }))
  .methods(['get','post','put','delete']);

  /*Resource.before('get', function(req, res, next) {
  	console.log(typeof(req.params.id))
    req.params.id = new ObjectID(req.params.id)
    next();
  })*/

  Resource.before('post', function(req, res, next) {
    req.body['createdate'] = new Date()
    next();
  })
	Resource.register(app,'/resources')

}



module.exports = {
	Restful:Restful
}

/*
GET /resources
GET /resources/:id
POST /resources
PUT /resources/:id
DELETE /resources/:id
*/
