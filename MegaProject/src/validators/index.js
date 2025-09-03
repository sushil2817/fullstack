import {body} from "express-validator"

const userRegisterationValidator = () =>{
    return [
        body('email')
            .trim()
            .notEmpty().withMessage("Email is required")
            .isEmail().withMessage("Email is invalid"),

        body("username")
            .trim()
            .notEmpty().withMessage("username is required")
            .isLength({min:3}).withMessage("Username should be at least 3 char")
            .isLength({max:13})
    ]
}

const userLoginValidator = () =>{
    return [

        body("email")
            .isEmail().withMessage("email is not valid"),
            
        body("password")
            .notEmpty().withMessage("Password cannot be empty")
    ]
}

export {userRegisterationValidator,userLoginValidator}