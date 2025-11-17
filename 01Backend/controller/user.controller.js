import { log } from 'console';
import User from '../models/User.model.js'
import crypto from "crypto"
import nodemailer from "nodemailer"
// import {MailtrapTransport} from "mailtrap"

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
        user.verificaitonToken = token
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
                message:"User registered successfully",
                success:true
            })

    } catch (error) {
        res.status(400).json(
            {
                message:"User not registered",
                success:false,
                error:error
            })
    }
    // send success status to user
}

const verifyUser = async ( req, res )=>{
    // get token from url
    // validate token
    // find user based on token
    // if not
    // isVerified = true
    // remove verification token
    // save 
    // return res
    const {token} = req.params

    if(!token){
        return res.status(400).json({
            message:"Invalid Token"
        })
    }
    const user = await User.findOne({verificaitonToken:token})
    if(!user){
        return res.status(400).json({
            message:"Invalid Token"
        });
    }

    user.isVerified = true;
    user.verificaitonToken = undefined;
    await user.save();
    return res.send(200).json({
        message:"User Verified",
        success:true,
    })

}

export { registerUser,verifyUser }