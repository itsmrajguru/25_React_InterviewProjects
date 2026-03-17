
/*creating controllers to 
1)Register a user
2)Login a user
3)Logout*/

require('dotenv').config()
const joi = require('joi')
const userModel = require('../models/user')
const bcrypt = require('bcrypt')
const jwt=require('jsonwebtoken')

/*adding a validation Schema that a user must obey
otherwise the user will not allowed to register*/
const registerSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().min(4).required()
})

//genearting a JWT token
const generateToken=(id)=>{
    return(jwt.sign({id},process.env.JWT_SECRET,{expiresIn:"7d"}))
}

const registerUser = async (req, res, next) => {

    //Getting user credentials from the frontend
    const { name, email, password } = await req.body

    //validating the credentials
    const { error } = registerSchema.validate({ name, email, password })

    //error returns an array with error messages
    if (error) {
        res.status(400).json({
            success: false,
            message: error.details[0].message  //this extracts the error message from the array
        })
    }
    else {
        try {
            //firstly check is userEmail already existing ?
            const isUserAlreadyExist = await userModel.findOne({ email })
            /*for multiple properties-->
                {$or;[{name},{password},{password}]}*/

            if (isUserAlreadyExist) {
                return res.status(400).json({
                    success: false,
                    message: 'Email Already Exists ,Please try Another Email ID'
                })
            }
            else {
                //hashing the password
                //salt is a random string that mix in the password
                const salt = await bcrypt.genSalt(10)
                const hashedPassword = await bcrypt.hash(password, salt)

                /* now due to change in the password ,
                we need to create a new user */
                const newlyCreatedUser = await userModel.create({
                    name,
                    email,
                    password: hashedPassword
                })

                if (newlyCreatedUser) {
                    /* Complete processs of JWT authentication */

                    //Step1: create a JWT for a user with his ID
                    const token=generateToken(newlyCreatedUser?._id)

                    /*Step 2:save the token in the cookie 
                    so that user's browser can save it automatically
                    and send to the server on every request for 
                    authentication */
                    res.cookie('token',token,{
                        withCredentials:true, /* This property 
                        actually sends the token back to the server
                        on every request for authentication */
                        httpOnly:false
                    })

                    res.status(201).json({
                        success: true,
                        message: 'User Created Successfully',
                        userData: {
                            name: newlyCreatedUser.name,
                            email: newlyCreatedUser.email
                        }
                    })
                }
                else {
                    res.status(400).json({
                        success: false,
                        message: "Unable to register user! please try again."
                    })
                }
            }
        } catch (e) {
            console.log(e);
            res.status(500).json({
                success: false,
                message: 'Something went wrong ! Please try again'
            })
        }
    }

}

module.exports={registerUser}