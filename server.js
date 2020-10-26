var http = require('http')
var url = require('url')
http.createServer(function(req, res){
console.log(url.parse(req.url).pathname)
console.log("In server.js")
res.writeHead(200, {"Content-Type": "text/plain"})
console.log(res.statusCode)
res.write("Hi!! How can I help you Sir ")
res.end()
}).listen(3000);

console.log("Learning");
console.log(process.env.Anchal);



