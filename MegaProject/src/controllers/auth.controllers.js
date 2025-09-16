// import {asyncHandler} from "../utils/async.handler.js"
// import {userLoginValidator,userRegisterationValidator} from "../validators/index.js"
// const registerUser = asyncHandler(async (req,res)=>{
//     const {email,username,password,role} = req.body;

//     // validation
//     if(!email || !password){

//     }
// })

// export {registerUser};

import { asyncHandler } from "../utils/async.handler"

const registerUser =  asyncHandler(async (req,res)=>{
    const {email, username, password, role} = req.body

    // validation
    
})
const loginUser =  asyncHandler(async (req,res)=>{
    const {email, username, password, role} = req.body

    // validation

})
const logOutUser =  asyncHandler(async (req,res)=>{
    const {email, username, password, role} = req.body

    // validation

})
const verifyEmail =  asyncHandler(async (req,res)=>{
    const {email, username, password, role} = req.body

    // validation

})

const resentVerificationEmail =  asyncHandler(async (req,res)=>{
    const {email, username, password, role} = req.body

    // validation

})

const refreshAccessToken =  asyncHandler(async (req,res)=>{
    const {email, username, password, role} = req.body

    // validation

})

const forgotPssswordRequest =  asyncHandler(async (req,res)=>{
    const {email, username, password, role} = req.body

    // validation

})

const changeCurrentPassword =  asyncHandler(async (req,res)=>{
    const {email, username, password, role} = req.body

    // validation

})

const getCurrentUser =  asyncHandler(async (req,res)=>{
    const {email, username, password, role} = req.body

    // validation

})



export {registerUser};