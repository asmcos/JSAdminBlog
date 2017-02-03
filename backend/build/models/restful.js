var restful = require('node-restful')
var mong = require('mongoose')

// app.blogs, /blogs
// app.images,/images

function Restful(app){
	var mongoose = restful.mongoose
  //databases
  mongoose.connect("mongodb://localhost/blogs")	

  //collection 1,
  var Resource = app.blogs = restful.model(
		'blog', mongoose.Schema({
    title: String,
    content:String,
    coverimg:String,
    createdate :Date,
    year: Number,
  }))
  .methods(['get','post','put','delete']);

  /*Resource.before('get', function(req, res, next) {
    next();
  })*/

  Resource.before('post', function(req, res, next) {
    req.body['createdate'] = new Date()
    next();
  })
	Resource.register(app,'/blogs')

  // collection 2,
  var UploadImg = app.images = restful.model(
		'uploadimg', mongoose.Schema({
    url: String,
    createdate :Date,
  }))
  .methods(['get','post','put','delete']);

	UploadImg.register(app,'/images')

}



module.exports = {
	Restful:Restful
}

/*
GET /blogs
GET /blogs/:id
POST /blogs
PUT /blogs/:id
DELETE /blogs/:id
*/
