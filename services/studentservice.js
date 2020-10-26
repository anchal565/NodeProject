var studentModel = require('../db/model/student');
module.exports = {
    'getStudentDetails' : function(cb){
        return studentModel.getAll(function(results) {
            console.log("I am in studentservice", results);
            cb(results);
        });
    },
    'putStudentDetails' : function(details){
        return new Promise(function(resolve, reject){
            studentModel.singleInsert(details, function(error){
                if(error)
                    return reject(error);
                else
                    return resolve();
            });
        });
    }
}