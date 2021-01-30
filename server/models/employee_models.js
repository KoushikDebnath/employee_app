const mongoose = require('mongoose');

const emploeeSchema = new mongoose.Schema({
    empid: { type: Number, unique: true, required: true },
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    DOB: { type: Date, required: true },
    grade: { type: String, required: true },
    sex: { type: String, required: true },
    salary: { type: Number, required: true },
    joining_date: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: Number, required: true }
},
    { timestamps: true }

)


module.exports = mongoose.model('employee', emploeeSchema);

