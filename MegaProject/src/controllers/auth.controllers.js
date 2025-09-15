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

const registerUser = () => asyncHandler(async (req,res)=>{
    const {email, username, password, role} = req.body

    // validation
    if(!email || !password){

    }
})

export {registerUser};