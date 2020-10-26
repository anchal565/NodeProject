var studentservice = require('../services/studentservice.js');
var studentHandler = {
    'getStudentDetails' : function getStudentDetails(req, res, next){
        // res.status(200).json([{
        //     "name" : "Anchal",
        //     "age" : 26,
        //     "maturity_level" : "high"
        // },{
        //     "name" : "Akshit",
        //     "age" : -5,
        //     "maturity_level" : "does not exist"
        // }]);
        function d(results){
            res.status(200).json(results);
        }
        studentservice.getStudentDetails(d);
    },
    'putStudentDetails' : function putStudentDetails(req, res, next){
        var studentDetails = req.body;
        studentservice.putStudentDetails(studentDetails)
        .then(function(){
            res.status(200).json({"status" : "SUCCESS"});
        })
        .catch(function(error){
            res.status(400).json({"status" : error.message});
        })
    }
};
module.exports = studentHandler;