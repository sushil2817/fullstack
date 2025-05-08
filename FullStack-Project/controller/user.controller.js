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

        console.log(req)

        const {name,email,password} = req.body

        if(!name || !email || !password){
            return res.status(400).json({
                messgae:"All fileds are required"
            })
        }

};


export {registerUser};