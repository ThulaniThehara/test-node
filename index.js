require('dotenv').config();
require('./config/db');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} successfully`);
});

app.get("/", (req, res) => {
    const data = req.body;
    res.send(data);
});

const patientCollection = require('./models/Patient');

app.post("/add-patient", async (req, res) => {
    try{
const data =req.body;
const newPatient = new patientCollection(data);
await newPatient.save();
res.status(200).send({
    message : "Patient added successfully",
    data : newPatient,
})
    }catch(err){
        res.status(500).send({
            message: "Error".err
        })
    }
});