var mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
    Name:String,
    Admin_no:Number,
    Dept:String,
    Sem:Number,
    Tutor:String,
    Email:String,
    Image:String,
    Parent_No:Number,
    Password:String,
    Phone:Number,
    
});
const Student = mongoose.model('Student', studentSchema);
module.exports = Student;