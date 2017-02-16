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
    pv: Number,
  }))
  .methods(['get','post','put','delete']);

  Resource.after('get', function(req, res, next) {
    if (req.params.id){
				var	pv = res.locals.bundle.pv + 1
        res.locals.bundle.pv = pv
        Resource.update({_id:req.params.id},{pv:pv},function(err, count, resp) {
        });

    }
    next();
  })

  Resource.before('post', function(req, res, next) {
    if(req.isAuthenticated()){
      req.body['createdate'] = new Date()
      req.body['pv'] = 1
      next();
    } else {
			res.sendStatus(403);
    } 
  })

  Resource.before('put', function(req, res, next) {
    if(req.isAuthenticated()){
      next();
    } else {
			res.sendStatus(403);
    } 
  })

  Resource.before('delete', function(req, res, next) {
    if(req.isAuthenticated()){
      next();
    } else {
			res.sendStatus(403);
    } 
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


 //collection 3, technology
 var Techblogs = app.techblogs = restful.model(
		'techblog', mongoose.Schema({
    title: String,
    content:String,
    logo:String,
    createdate :Date,
    pv: Number,
  }))
  .methods(['get','post','put','delete']);
 
  Techblogs.after('get', function(req, res, next) {
    if (req.params.id){
				var	pv = res.locals.bundle.pv + 1
				res.locals.bundle.pv = pv
        Techblogs.update({_id:req.params.id},{pv:pv},function(err, count, resp) {
        });

    }
    next();
  })

  Techblogs.before('post', function(req, res, next) {
    if(req.isAuthenticated()){
      req.body['createdate'] = new Date()
      req.body['pv'] = 1
      next();
    } else {
			res.sendStatus(403);
    } 
  })

  Techblogs.before('put', function(req, res, next) {
    if(req.isAuthenticated()){
      next();
    } else {
			res.sendStatus(403);
    } 
  })

  Techblogs.before('delete', function(req, res, next) {
    if(req.isAuthenticated()){
      next();
    } else {
			res.sendStatus(403);
    } 
  })

	Techblogs.register(app,'/techblogs')
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
