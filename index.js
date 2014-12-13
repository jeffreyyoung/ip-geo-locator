var express = require('express')

var app = express()

app.enable('trust proxy')

app.get('*', function(req, res){
    res.send('Your ip address is: ' + req.ip)
})

var port = process.env.PORT || 3333

app.listen(port, function(){
    console.log('listening on port ' + port)
})