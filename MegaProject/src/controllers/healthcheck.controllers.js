import {ApiResponse} from "../utils/api.response.js"

const healthChekc = async (req,res)=>{
    try {await
        res.status(200).json(
            new ApiResponse(200,{message:"Server is Up and running"})
        )
    } catch (error) {
        
    }
}

export {healthChekc};