var mong = require('mongoose')
var ObjectID = mong.Types.ObjectId


function Restful(r,app){
	var mongoose = r.mongoose
  mongoose.connect("mongodb://localhost/resoruces")	

  var Resource = app.resource = r.model(
		'resource', mongoose.Schema({
    title: String,
    content:String,
    year: Number,
  }))
  .methods(['get','post','put','delete']);

  /*Resource.before('get', function(req, res, next) {
  	console.log(typeof(req.params.id))
    req.params.id = new ObjectID(req.params.id)
    next();
  })*/

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
