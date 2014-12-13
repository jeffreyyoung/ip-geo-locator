var express = require('express')
var geoip = require('geoip-lite');

var ip = "207.97.227.239";


var app = express()

app.enable('trust proxy')

app.get('*', function(req, res){
    var geo = geoip.lookup(req.ip);
    res.json(geo)
})

var port = process.env.PORT || 3333

app.listen(port, function(){
    console.log('listening on port ' + port)
})