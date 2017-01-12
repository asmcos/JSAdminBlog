var multer = require('multer')


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    var refilename = file.fieldname + '-' + Date.now() +'-'+ file.originalname
    req.refilename = refilename
    cb(null, refilename)
  }
})

var upload = multer({ storage: storage }).single('upload')


function Uploader(app){
  app.post('/uploader/uploadimage', function (req, res, next) {
	  upload(req, res, function (err) {
      if (err) {
        return res.end('failed')
      }
      console.log(req.refilename)
      res.setHeader('Content-Type', 'text/html'); 
			res.end('<script type="text/javascript">window.parent.CKEDITOR.tools.callFunction("0", "/'+req.refilename+'", "");</script>')

     })	
  });
}



module.exports = {
	Uploadimage:Uploader
}
