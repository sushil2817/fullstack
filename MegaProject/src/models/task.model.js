import mongoose, {Schema} from "mongoose";
import {AvaliableTaskatus,TaskStatusEnum} from "../utils/constants.js"
const taskSchema = new Schema({
        title:{
            type:String,
            required:true,
            trim:true
        },
        description:{
            type:String,
        },
        project:{
            type:Schema.Types.ObjectId,
            ref:"Project",
            required:true
        },
        assignedTo:{
            type:Schema.Types.ObjectId,
            ref:"Project",
            required:true
        },
        assignedBy:{
            type:Schema.Types.ObjectId,
            ref:"Project",
            required:true
        },
        status:{
            type:String,
            enum:AvaliableTaskatus,
            default:TaskStatusEnum.TODO
        },
        attachments:{
            type:[
                {
                    url:String,
                    mimtype:String,
                    size:Number
                }
            ],
            default:[]              //[{},{},{}] define an single array and show the data types
        }

    },
    {timestamps:true})

export const Task = mongoose.model("Task",taskSchema);