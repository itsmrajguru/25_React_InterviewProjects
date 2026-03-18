
/*creating controllers to 
1)Register a user
2)Login a user
3)Logout*/

require('dotenv').config()
const joi = require('joi')
const userModel = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

/*adding a validation Schema that a user must obey
otherwise the user will not allowed to register*/
const registerSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().min(4).required()
})

const loginSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(4).required()
})

//genearting a JWT token
const generateToken = (id) => {
    return (jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" }))
}

const registerUser = async (req, res, next) => {

    //Getting user credentials from the frontend
    const { name, email, password } = await req.body

    //validating the credentials
    const { error } = registerSchema.validate({ name, email, password })

    //error returns an array with error messages
    if (error) {
        return res.status(400).json({
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
                    const token = generateToken(newlyCreatedUser?._id)

                    /*Step 2:save the token in the cookie 
                    so that user's browser can save it automatically
                    and send to the server on every request for 
                    authentication */
                    res.cookie('token', token, {
                        withCredentials: true, /* This property 
                        actually sends the token back to the server
                        on every request for authentication */
                        httpOnly: false
                    })

                    return res.status(201).json({
                        success: true,
                        message: 'User Created Successfully',
                        userData: {
                            name: newlyCreatedUser.name,
                            email: newlyCreatedUser.email,
                            _id: newlyCreatedUser._id
                        }
                    })
                }
            }
        } catch (e) {
            console.log(e);
            return res.status(500).json({
                success: false,
                message: 'Something went wrong ! Please try again'
            })
        }
    }
}


const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body || {};

        //does User fulfills the conditions?
        const { error } = loginSchema.validate({ email, password });

        if (error) {
            return res.status(400).json({
                success: false,
                message: error.details[0].message
            });
        }

        /*check whether the  user emailId is registered in the 
        database to compare with the login email id*/
        const getUser = await userModel.findOne({ email });

        if (!getUser) {
            // Fix: Added status code 400 for incorrect email
            return res.status(400).json({
                success: false,
                message: 'Incorrect Email'
            });
        }

        //check whether the password exist or not ?
        const getAuth = await bcrypt.compare(password, getUser.password);
        if (!getAuth) {
            // Fix: Added status code 400 for incorrect password
            return res.status(400).json({
                success: false,
                message: 'Incorrect Password'
            });
        }

        //generating a fresh token on every login...
        const token = generateToken(getUser._id);
        res.cookie('token', token, {
            withCredentials: true,
            httpOnly: false
        });

        // Fix: Added return statement here
        return res.status(200).json({
            success: true,
            message: 'User Logged In Succesfuly'
        });
    } catch (e) {
        console.log(e);
        // Fix: Added return statement here
        return res.status(500).json({
            success: false,
            message: 'Something went wrong ! Please try again'
        });
    }
}

const logoutUser = async (req, res) => {
    /* This is so simple, if you empty the 'token' cookie,
       user will be logged out... that's it! */
    res.cookie('token', '', {
        withCredentials: true,
        httpOnly: false,
        expires: new Date(0) // Good practice to force immediate expiration
    });
    
    return res.status(200).json({
        success: true,
        message: "User Logged out Successfully!"
    });
}
module.exports = { registerUser, loginUser ,logoutUser}