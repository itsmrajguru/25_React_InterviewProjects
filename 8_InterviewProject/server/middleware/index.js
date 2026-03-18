
const jwt=require('jsonwebtoken')
require('dotenv').config()
const userModel=require('../models/user')

const userAuthVerification = async (req, res) => {
    //Firstly we take the token from the req stored in the req.cookie
    const token = await req.cookies.token;

    if (!token) {
        return res.json({
            success: false,
            message: 'Token Not Found OR Invalid Token'
        })
    }
    if (token) {
        try {
            /*Step 1: Verify the token, Decode it and it will return
            the original _id giveb by MongoDB,as we created token with
            the help of that id*/ 
            const decoded=jwt.verify(token,process.env.JWT_SECRET)

            /* Step 2:store the decoded in a varible and compare with
            the _id saved in the mongoDb */
            const userInfo=await userModel.findById(decoded.id)

            if(userInfo){
                return res.json({
                    success:true,
                    userInfo,
                    message:'User Authenticated Successfully'
                })
            }

        } catch (e) {
            console.log(e);
            return res.json({
                success: false,
                message: 'User Not Authenticated'
            })
        }
    }
}   

module.exports={userAuthVerification}