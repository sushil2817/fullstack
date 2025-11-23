import jwt from "jsonwebtoken"
export const isLoggedIn = async (req,res,next)=>{
    // check token
    // token verify
    // get data from token
    try {
        console.log(req.cookies);
        let token = req.cookies?.token  
        console.log('Token Found: ', token? " Yes ":" No ");
        if(!token){
            console.log("No Token");
            return res.stauts(400).json({
                success:false,
                messgae:"Authentication failed"
            })
        }

        const decoded = jwt.verify(token,process.env.SECRET_KEY);
        console.log("decoded Data ",decoded);
        req.user = decoded;
        next();
    } catch (error) {
        console.log("Auth middleware failure");
        return res.status(500),json({
            success:false,
            message:"Internal server error"
        })
    }
}