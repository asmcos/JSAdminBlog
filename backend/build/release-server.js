var config = require('../../config')
var common = require('./common')
if (!process.env.NODE_ENV) process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
var path  = require('path')
var app   = common.app
var express   = common.express
var rewrite   = common.rewrite
var port  = process.env.PORT || config.dev.port


// serve pure static assets
//var staticPath = path.posix.join(config.build.assetsPublicPath, config.build.assetsSubDirectory)
//var staticPath = path.posix.join(config.build.assetsRoot,staticPath)
//app.use(staticPath, express.static('./dist'))
//app.use(express.static(config.build.assetsRoot));
app.use(express.static(path.resolve(__dirname,'../dist')));
app.use(express.static(path.resolve(__dirname,'../../third/ckeditor')));
app.use(express.static(path.resolve(__dirname,'../../uploads')));

app.get("/admin/login",function (req,res){
    res.sendFile(path.resolve(__dirname, '../src/index.html'));
})

app.get("/admin/register",function (req,res){
    res.sendFile(path.resolve(__dirname, '../src/index.html'));
})

app.get("/admin/*",function (req,res){
 if(req.isAuthenticated()){
    res.sendFile(path.resolve(__dirname, '../src/index.html'));
  }
  else{
    res.redirect('/admin/login');
  }
})

app.get("/",function (req,res){
 if(req.isAuthenticated()){
    res.sendFile(path.resolve(__dirname, '../src/index.html'));
  }
  else{
    res.redirect('/admin/login');
  }
})

module.exports = app.listen(port, '0.0.0.0' , function (err) {
  if (err) {
    console.log(err)
    return
  }
  var uri = 'http://localhost:' + port
  console.log('Listening at ' + uri + '\n')

})
