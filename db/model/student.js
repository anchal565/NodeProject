var db = require('../index.js');
module.exports = {
    'getAll' : function(cb){
        //var result;
         db.query('select * from student', function(error, results){
            if(error)
                throw error;
            else{
                console.log("results : ", results);
                cb(results);
                //result = results;
            }
        }); 
    
        console.log("Final result : ");
        //return result;
    },
    'singleInsert' : function (data,cb){
        db.query('insert into student(name, age) values ("Anchal", 26)', function(error){
            if(error)
                cb(error);
            else
                cb();

        });
    }
};