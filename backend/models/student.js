var mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
   name:String,
    admNo:Number,
    dept:String,
    sem:Number,
    tutorName:String,
    email:String,
    image:String,
    parent_No:Number,
    password:String,
    phone:Number
    
});
const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
