
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
