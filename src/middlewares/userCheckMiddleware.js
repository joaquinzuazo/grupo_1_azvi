const userCheck = {
 user: (req, res, next) => {
     if (req.session.user){
        return res.redirect(`/users/${req.session.user.id}/data`)
     } 
     next();
 },
 admin: (req, res, next) =>{
   if(req.session.user.admin){
       return next();
   }
   res.redirect('/');
 }
   

}


module.exports=userCheck