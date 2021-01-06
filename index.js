const express = require('express')
const app = express()

const sequelize = require('./data_base/db')
const Doctor = require('./data_base/models/doctor');
//const Hospital = require('./data_base/models/hospital');

// Settings
const port = process.env.PORT || 3000;

// Routes
app.get('/', (req, res) => {
    /*
    Doctor.create({
        Doctor_Name: "Daniela",
        Speciality: "General doctor"
    }).then(hospital => {
        res.json(hospital);
    });
     */

    /*
    Hospital.create({
        Hospital_Name: "San Rafael",
    }).then(hospital => {
        res.json(hospital);
    });
     */

    Doctor.findAll().then(doctors => {
        res.json(doctors);
    });
})

// Application start
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);

    // connecting with data base
    sequelize.sync({ force: false}).then( () => {
        console.log("We have successfully connected to the data base!");
    }).catch(error => {
        console.log("An error has occurred", error);
    })
})