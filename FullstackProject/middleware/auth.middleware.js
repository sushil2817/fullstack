import jwt from "jsonwebtoken"
export const isLoggedIn = async (req,res,next)=>{

    // get token
    // check token
    // get data from token

    try {
        console.log(req.cookies);
        let token = req.cookies?.token;

        console.log('Token Found: ', token ? "YES" : "NO");
        
        if(!token){
            console.log('No token');
            return res.status(401).json({
                success:false,
                message: "Authenticaiton failed"
            })
        }

        const decoded = await jwt.verify(token, process.env.JWT_SECRET);
        console.log("Decoded Data: ", decoded);
        req.user = decoded;
        next();
        
    } catch (error) {
        console.log("Auth middleware failure");
        return res.status(500).json({
            success:false,
            message:"Internal server error"
        })
    }
};

