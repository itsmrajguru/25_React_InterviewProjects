//importing mongoose

const mongoose = require('mongoose')

//importing dotenv
require('dotenv').config()

//creating Database
async function connectToDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB Connected Successfully");
    } catch (e) {
        console.log("Error Connecting Database",e);
        process.exit(1) //always intialize with 1 (Good Practice)
    }
}

module.exports=connectToDB