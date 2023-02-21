const mongoose = require('mongoose')
require('dotenv').config();
const express = require('express');
const router = require('../Node-task 2/route/indexroute')


const {urlencoded} = require('express')
const app = express();

app.use('/api/v1', router)

const MongoDB_URI = process.env.MongoDB_URI

mongoose.connect(MongoDB_URI)
.then(() => {
    console.log("connected to database")
})
.catch(() => {
    console.log("Error occured")
})

app.use(urlencoded({extended : false}));
app.use(express.json())

const PORT = process.env.PORT || 6000;


app.listen(PORT, () => {
    // database()
    console.log(`Server is running on port ${PORT}`)
})