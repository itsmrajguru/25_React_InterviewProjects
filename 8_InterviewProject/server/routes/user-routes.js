//importing express

const express=require('express')

const userRouter=express.Router()

//importing user-controller
const {registerUser}=require('../controllers/user-controllers')

/*creating routes for 
1)Register user
2)Login user
3)Logout*/

userRouter.post('/register',registerUser)

module.exports=userRouter

