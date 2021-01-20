const authMiddleware  = (req,res,next)=>{

    // console.log(req.session);

if(req.session.user){

    res.locals.userLog=req.session.user
     
}
next()




}


module.exports=authMiddleware