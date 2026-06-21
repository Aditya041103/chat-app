export async function checkAuth(req,res,next){
    if(!req.user){
        return res.status(400).json({message:"Unauthorized access"})
    }
    res.status(200).json(req.user)
};