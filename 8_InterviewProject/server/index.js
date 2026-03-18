//Har Har Mahadev || Jay Bramhacharya

//importing express
const express = require('express')
const app = express()

require('dotenv').config()
const PORT = process.env.PORT


/* cors is cross-origin resource sharing that only means that you can integrate diffrent 
resorces like frontend and backend 

Need ?--> Without this the requests and responses between the frontend and backend are blocked
          by the broswer automatically... */

const cors=require('cors')
app.use(
    cors({
        origin:['http://localhost:5173'],  // I allow requests comming from this url
        methods:['GET','POST','PUT','DELETE'], //I allow these HTTP methods comming from frontend
        credentials:true   //I allow the cookies to be sent cross-origin
    })
)

/* cookie parser actually helps to convert the string format cookie
into the redable JWT token format */
const cookieParser=require('cookie-parser') 
app.use(cookieParser())

/*this automated middleware converts the json format data into
JavaScript Object format, so that it can be used very easily...*/

app.use(express.json())

//importing DataBase
const connectToDB = require('./database/db')
connectToDB()

// importing Router
const userRouter = require('./routes/user-routes')

app.use('/api/user/',userRouter)

//Initilizing Welcome Route
app.get('/api', (req, res) => {
    res.status(200).json({
        message:"Hello User !"
    })
})

//listening to the server
app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`)
})
