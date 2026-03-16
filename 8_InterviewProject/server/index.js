//Har Har Mahadev

//importing express
const express=require('express')
const app=express()

//importing dotenv
require('dotenv').config()
const PORT=process.env.PORT


/*NOTE:this .config() function internally checks all values stored in
the .env file and loads into the process.env */ 

//importing DataBase
const connectToDB=require('./database/db')
connectToDB()

app.get('/',(req,res)=>{
    res.send("<h1>Welcome Guys,This is MSR</h1>")
})

app.listen(PORT,()=>{
    console.log(`Server started at http://localhost:${PORT}`)
})
