var express = require('express');
var app = express();
var routes = require('./router');
routes(app);
app.set('port',3000);
app.listen(app.get('port'), function(){
    console.log("server is listening on port", app.get('port'));
}).timeout=5000;







