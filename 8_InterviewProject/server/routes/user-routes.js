//importing express

const express = require('express')

const userRouter = express.Router()

//importing user-controller
const { registerUser, loginUser,logoutUser } = require('../controllers/user-controllers')
const { userAuthVerification } = require('../middleware/index')

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.get('/logout', logoutUser)

/*Important :How to achieve userAuthentication on every page Refresh
so they are 2 ways to do this :
1)Way 1 :userRouter.get('/dashboard',userAuthVerification,registerUser) 

2)Way 2 :userRouter.get('/auth',userAuthVerification)
        
differnce between the ways
1) By First way , you can authenticate the user a particular route or page
only just like /dashboard 

2) By Second way ,you can authenticate the user on every page refresh
by calling the route /verify on useEffct() and check the middleare */
userRouter.get('/auth', userAuthVerification)
userRouter.get('/logout',logoutUser)

module.exports = userRouter

