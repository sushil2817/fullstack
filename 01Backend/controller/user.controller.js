import { log } from 'console';
import User from '../models/User.model.js'
import crypto from "crypto"
import nodemailer from "nodemailer"
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'

const registerUser = async (req, res) => {
    // get Data
    const { name, email, password } = req.body;
    // validate
    if (!name || !email || !password) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }
    // check if user already exists
    try {
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            })
        }
        // create a user in db

        const user = await User.create({
            name, email, password
        })
        console.log(user)
        if (!user) {
            return res.status(400).json({
                message: "User not registerd"
            })
        }
        // createa verificaiton token
        const token = crypto.randomBytes(32).toString("hex")
        console.log(token);
        // save token in db
        user.verificationToken = token
        await user.save()
        // send token as email to user
        const transporter = nodemailer.createTransport({
            host: process.env.MAILTRAP_HOST,
            port: process.env.MAILTRAP_PORT,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.MAILTRAP_USERNAME,
                pass: process.env.MAILTRAP_PASSWORD,
            },
        })
        const mailOptions = {
            from: process.env.MAILTRAP_SENDEREMAIL,
            to: user.email,
            subject: "Verify Your email",
            text: `Please click on the following link: ${process.env.BASE_URL}/api/v1/users/verify/${token}`
        }

        await transporter.sendMail(mailOptions)
        res.status(201).json(
            {
                message: "User registered successfully",
                success: true
            })

        console.log(mailOptions, "mail has been send")

    } catch (error) {
        res.status(400).json(
            {
                message: "User not registered",
                success: false,
                error: error
            })
    }
    // send success status to user
}
const verifyUser = async (req, res) => {
//     // get token from url
//     // validate token
//     // find user based on token
//     // if not
//     // isVerified = true
//     // remove verification token
//     // save 
//     // return res
    console.log("this is req params");
    
    console.log(req.params);
    
    const { token } = req.params
    console.log(token);
    

    if (!token) {
        return res.status(400).json({
            message: "Invalid Token 1"
        })
    }
    const user = await User.findOne({ verificationToken: token })
    console.log("this is user: ",user);
    // console.log("token in DB:", user.verificationToken);

    
    if (!user) {
        return res.status(400).json({
            message: "Invalid Token 2"
        });
    }

    user.isVerified = true;
    user.verificationToken = undefined;
    await user.save();
    return res.status(200).json({
        message: "User Verified successfully",
        success: true,
    })
    }
const loginUser = async (req, res) => {

    // user email & password from body
    // verify email and password with db
    const { email, password } = req.body;

    if (!email || !password) {
        return res.send(400).json({
            "message": "all fields are required"
        })
    }

    try {
        const user = await User.findOne({ email })
        if (!user) {
            return res.send(400).json({
                "message": "Invalid email or password"
            });
        }

        const isMatched = await bcrypt.compare(password, user.password)

        console.log(isMatched);

        if (!isMatched) {
            return res.send(400).json({
                "message": "Invalid email and password"
            })
        }

        if(user.isVerified == false){
            return res.status(400).json({
                "message":"Please verify your email"
            })
        }

        const token = jwt.sign(
            {id:user._id,role:user.role},
            process.env.SECRET_KEY,
            {expiresIn:'24h'}
        )
        console.log(token)
        const cookieOptions = {
            httpOnly:true,
            secure:true,
            maxAge : 24 * 60 * 60 * 1000,
        }

        res.cookie("token",token,cookieOptions)
        res.status(200).json({
            success:true,
            message:"Login successfull",
            token,
            user:{
                id:user._id,
                name:user.name,
                role:user.role
            }
        })

    } catch (error) {
        return res.send(400).json({
                "message": "Invalid email and password"
            })
    }
}
const getMe = async(req,res)=>{
    try {
        const user =await User.findById(req.user.id).select('-password')
            if(!user){
                return res.status(400).json({
                    success:false,
                    message:"User not found"
                })
            }
            res.status(200).json({
                success:true,
                user
            })
        console.log("reached at profile level");
        
    } catch (error) {
        
    }
}
const logoutUser = async(req,res)=>{
    try {
        // clear the cookes
        res.cookie('token','',
            {
            expires:new Date(0)
            }
        )
        res.status(200).json({
            success:true,
            message:"Logged out successfully"
        })
    } catch (error) {
        
    }
}
const forgotPassowrd = async (req, res) => {
    try {
        // get email
        // const {email} = req.body;
        // const user = await User.findOne({email:email})
        // find user based on email
        // reset token + reset expiry => Date.now()+10*60*1000=>user.save()
        // send email => desing url
        const { email } = req.body;
        const user = await User.findOne({ email: email });
        console.log(user);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        const resetToken = crypto.randomBytes(32).toString("hex") + Date.now() + 10 * 60 * 1000
        user.resetPasswordToken = resetToken;
        user.resetPasswordExpires = new Date(Date.now() + 10 * 60 * 1000);
        await user.save();

        const transporter = nodemailer.createTransport({
            host: process.env.MAILTRAP_HOST,
            port: process.env.MAILTRAP_PORT,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.MAILTRAP_USERNAME,
                pass: process.env.MAILTRAP_PASSWORD,
            },
        })


        const mailOptions = {
            from: process.env.MAILTRAP_SENDEREMAIL,
            to: user.email,
            subject: "Verify Your email",
            text: `Please click on the following link to reset password : ${process.env.BASE_URL}/api/v1/users/resetpassword/${resetToken}`
        }

        await transporter.sendMail(mailOptions)
        res.status(201).json(
            {
                message: "reset password has been send successfully successfully",
                success: true
            })

        console.log(mailOptions, "mail has been send")


    } catch (error) {

    }
}
const resetPassword = async (req, res) => {
    try {
        // collect token from params
        // password from req.body
        const { token } = req.params
        const { password } = req.body;
        // console.log(token);
        // console.log(password);
        

            const user = await User.findOne({
                resetPasswordToken: token,
                resetPasswordExpires: { $gt: Date.now() }
            })
            
            if (!user) {
                return res.status(400).json({
                    message: "User Verified Failed",
                    success: true,
                })
            }
            // set password in user
            // resetToken , resetExpiry => reset
            // save
            user.password = password;
            user.resetPasswordToken = undefined;
            user.resetPasswordExpires = undefined;
            await user.save();
            return res.status(200).json({
                    message: "PAssword reset successfull",
                    success: true,
                })

    } catch (error) {
        return res.status(400).json({
                    message: "User Verified Failed",
                    success: true,
                })
    }
}



export { 
    registerUser,
    verifyUser,
    loginUser,
    getMe,
    resetPassword,
    logoutUser,
    forgotPassowrd
} 