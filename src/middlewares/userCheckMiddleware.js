const userCheck = {
 user: (req, res, next) => {
     if (req.session.user){
        return res.redirect(`/users/data`)
     } 
     return next();
 },
 admin: (req, res, next) =>{
   if(req.session.user.admin){
       return next();
   }
   res.redirect('/');
 },
 loged:(req,res,next)=>{

    if(req.session.user){
        return next()
    }  

    res.redirect('/login')
 }
   

}


module.exports=userCheck