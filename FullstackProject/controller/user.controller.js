import { log } from "console";
import User from "../model/user.model.js";
import crypto from "crypto"
import nodemailer from "nodemailer";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

const registerUser = async(req, res) =>{
    // get data
    // validate
    // check if user already exists
    // verify
    // create a user in db
    // create a verification token
    // save token in db
    // send token as email to user
    // send success status to user

    const {name,email,password} = req.body;
    if(!name || !email || !password){
            return res.status(400).json({
                message:"All fields are required"
            })
        }
    
    try {
            const existingUser = await User.findOne({email})
            if(existingUser){
                return res.status(400).json({
                    message:"User already exists"
                })
            }

            const user = await User.create({
                name,
                email,
                password
            })
            console.log("this is user");
            
            console.log(user);
            
            if(!user){
                return res.status(400).json({
                    message:"User not registered"
                });
            }

        const token =  crypto.randomBytes(32).toString("hex")
        console.log(token);

        user.verificationToken = token
        await user.save()
        // send email
        const transporter = nodemailer.createTransport({
        host: process.env.MAILTRAP_HOST,
        port: process.env.MAILTRAP_PORT,
        secure: false, // true for 465, false for other ports
        auth: {
            user:process.env_MAILTRAP_USENAME,
            pass: process.env_MAILTRAP_PASSWORD
        },
});

        const mailOptions = {
            from: process.env_MAILTRAP_SENDEREMAIL,
            to: user.email,
            subject: "Verify your email",
            text: `Please click on the following link:
            ${process.env.BASE_URL}/api/v1/users/verify/${token}
            `, 
        }

        const emailDone = await transporter.sendMail(mailOptions)
        res.status(200).json({
            message:"User registerd successfully",
            success:true
        })
        } catch (error) {
            res.status(400).json({
            message:"User not registerd",
            success:false,
            error
        })
        }
};
const verifyUser = async (req,res) =>{
    // get token from url
    // validate 
    // find user based on token
    // if not
    //  set isVerified filed to true
    //  remove verification token
    //  save 
    // return res

    const {token} = req.params;
    console.log(token);

    if(!token){
        return res.status(400).json({
            message: "Invalid token"

        })
    }
    const user = await User.findOne({verificationToken:token})
    if(!user){
        return res.status(400).json({
            message: "Invalid token"

        });
    }

    user.isVerified = true;
    user.verificationToken = undefined
    res.status(200).json({
        success:true,
        message:"user verified"
    })
    await user.save()
};
const login  = async (req,res) =>{
    const {email,password} = req.body

    if(!email || !password){
        return res.status(400).json(
            {
                message:"All fileds are required",
            }
        )
    }

    try {
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({
                message:"Invalid email and password",
            });
        }

        const isMatch = await bcrypt.compare(password, user.password)

        console.log(isMatch);
        

        if(!isMatch){
            return res.status(400).json({
                message:"Invlaid email and password"
            });
        }

        //

        const token = jwt.sign(
            {id:user._id, role:user.role},

            process.env.JWT_SECRET,{
                expiresIn:'24h'
            }
        );

        const cookieOptions = {
            httpOnly:true,
            secure:true,
            maxAge:24*60*600*1000
        }
        res.cookie("token",token,cookieOptions)

        res.status(200).json({
            message:"Login Success",
            token,
            user:{
                id:user._id,
                name:user.name,
                role:user.role
            }
        })


    } catch (error) {
        res.status(400).json({
            message:"User not found",
            success:false,
            error
        })
    }

}
const getMe = async(req,res) =>{
    try {
        const user = await User.findById(req.user.id).select('-password')
        console.log(user);
        
        if(!user){
            return res.status(400).json({
                success:false,
                message:"User not found",
            })
        }
        res.status(200).json({
                success:true,
                user
            })


    } catch (error) {
        
    }
}
const logoutUser = async(req,res) =>{
    try {
        res.cookie('token','',{})
        res.status(200).json({
        success:true,
        message:"Logged Out successfully"
    })
    } catch (error) {
        
    }
}
const forgotPassword = async(req,res) =>{
    try {
        //  get email
        // find user based on email => Date.now()+10*60*1000 => user.save();
        // send email => design url

    } catch (error) {
        
    }
}
const resetPassword = async(req,res) =>{
    try {
        // collect token from params
        // password from req.body
        // find user ?
        const {token} = req.params
        const {password} = req.body


        try {
            const user = await User.findOne({
                resetPasswordToken:token,
                resetPasswordExpires:{$gt:Date.now()}
            })
            // set password in user
            // reset token in user
            // resetexpiry inn user
            // save

        } catch (error) {
            
        }

    } catch (error) {
        
    }
}

export { 
    registerUser, 
    verifyUser, 
    login,getMe, 
    logoutUser, 
    forgotPassword,
    resetPassword 
}