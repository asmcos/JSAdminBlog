var request = require('request')

request.post('http://localhost:8080/resources',{form:{title:'第一个Blog',content:'一定好好写！'}})
