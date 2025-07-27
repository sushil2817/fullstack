import { log } from "console";
import User from "../model/user.model.js";
import crypto from "crypto"
import nodemailer from "nodemailer";


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

    const {token} = res.params;
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
    await user.save()
};




export { registerUser, verifyUser }