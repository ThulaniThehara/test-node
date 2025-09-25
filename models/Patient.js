const mongoose = require('mongoose');
const { type } = require('os');
const db = mongoose.connection.useDb('Hospital');
const patientSchema = new mongoose.Schema(
    {
        Name :{
            type:String,
            required:true
        },
        Age :{
            type:Number,
        },
        Gender :{
            type:String,
        },
        Disease :{
            type:String,
        },
    });
    const patient = db.model('patient', patientSchema);
    module.exports = patient;