var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    insecureAuth : true,
    database: "test"
});
connection.connect(function(error){
    if(error)
        throw error;
    else
        console.log("Connected to db");
});
module.exports = connection;

