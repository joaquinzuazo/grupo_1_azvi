const userCheck = {
 user: (req, res, next) => {
     if (req.session.user){
        return res.redirect(`/users/data`)
     } 
     return next();
 },
 admin: (req, res, next) =>{

   if(req.session.user && req.session.user.role=='admin'){
       return next();
   }
   res.redirect('/');
 },
 loged:(req,res,next)=>{

    if(req.session.user){
        return next()
    }  

    res.redirect('/users/login')
 }
   

}


module.exports=userCheck