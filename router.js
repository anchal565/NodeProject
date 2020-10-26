var studenthandler = require('./handler/studenthandler');
module.exports = function(app){
    app.get('/listOfStudents', studenthandler.getStudentDetails);   
    app.post('/addStudent', studenthandler.putStudentDetails);
}
