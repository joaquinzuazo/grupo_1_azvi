const fs = require('fs')
const path = require('path')
const usersPathFile = path.join(__dirname, '..', 'data', 'users.json')
const users = JSON.parse(fs.readFileSync(usersPathFile, { encoding: 'utf-8' }))


function cookieMiddleware (req,res,next){
    
    if(req.cookies.remember != undefined && req.session.user == undefined){

        
        //var user = users.find(user=>user.email==req.cookie.remember)
        req.session.user = req.cookies.remember
                    
            }  next()

        


        }
         
    
    


module.exports = cookieMiddleware;