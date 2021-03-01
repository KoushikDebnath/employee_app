const mongoose = require('mongoose');

const emploeeSchema = new mongoose.Schema({
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    DOB: { type: Date, required: true },
    grade: { type: String, required: true },
    gender: { type: String, required: true },
    salary: { type: Number, required: true },
    joining_date: { type: Date, required: true },
    email: { type: String, required: true },
    mobile: { type: Number, required: true }
},
    { timestamps: true }

)


module.exports = mongoose.model('employee', emploeeSchema);

