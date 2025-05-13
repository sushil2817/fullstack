import { log } from "console";
import User from "../models/User.model";
import crypto from "crypto";
import nodemailer from "nodemailer"

const registerUser = async (req,res) =>{
    // create a new user
        // get data
        // validate
        //check if user already exits
        // create a user in database
        //create a varification token
        //save token in db
        //send token as email to user
        //send success status to user

        // console.log(req)

        

        const {name,email,password} = req.body

        // if(password.length > 6){
        //     console.log("Passwor dis less then 6")
        //    }
        if(!name || !email || !password){
            return res.status(400).json({
                 messgae:"All fileds are required"
            })
        }
        
        try{
            const exisitingUser = await User.findOne({email})
            if(exisitingUser){ 
                return res.status(400).json({
                    message:"User already exists"
                })
            }

            const user = await User.create({
                name,
                email,
                password
            })

            if(!user){
                 return res.status(400).json({
                    message:"User not registered."
                })
            }

            const token = crypto.randomBytes(32).toString("hex")
            console.log(token);
            user.verificationToken = token
            
            await user.save()

            // send
        // Create a test account or replace with real credentials.
        const transporter = nodemailer.createTransport({
        host: process.env.MAILTRAP_HOST,
        port: process.env.MAILTRAP_PORT,
          secure: false, // true for 465, false for other ports
        auth: {
            user: "maddison53@ethereal.email",
            pass: "jn7jnAPss4f63QBp6D",
        },
        });

        const mailOption = {
            from: process.env.MAILTRAP_SENDEREMAI,
            to: user.email,
            subject: "Verify your email",
            text: `Please click on the following link: 
                ${process.env.BASE_URL}/api/v1/users/verify/${token}    
            `, // plain‑text body
            // html: "<b>Hello world?</b>", // HTML body
        }
        
            
        }catch (error){

        }
        

};


export {registerUser};