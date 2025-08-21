import mongoose, {Schema} from "mongoose";
import bcrypt from "bcryptjs"

const userSchema = new Schema({
    avatar:{
        type:{
            url:String,
            localpath:String
        },
        default:{
            url:"https://placeholder.co/600*400",
            localpath:""
        }
    },
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
    },
    fullname:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:[true,"password is required"]
    },
    isEmailVarified:{
        type:String,
        default:false
    },
    forgotPasswordToken:{
        type:Boolean,
    },
    forgotPasswordExpiry:{
        type:Date,
    },
    refreshToken:{
        type:String
    },
    emailVarificationToken:{
        type:String
    },
    emailVarificationExpiry:{
        type:Date
    }
},{timestamps:true});


userSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next()
    this.password = await bcrypt.hash(this.password,10)
    next()
})

// 2:52

export const User = mongoose.model("User",userSchema);