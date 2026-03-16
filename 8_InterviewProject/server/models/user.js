//importing mongoose

const mongoose = require('mongoose')

//creating user Schema

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    }
    
} /*, { timestamps: true } used for created-at and updated-at fields */) 


// creating user model
const userModel=mongoose.model('User',userSchema)
module.exports=userModel
