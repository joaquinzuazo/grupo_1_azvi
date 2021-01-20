const fs = require('fs')
const path = require('path')
const usersPathFile = path.join(__dirname, '..', 'data', 'users.json')
const users = JSON.parse(fs.readFileSync(usersPathFile, { encoding: 'utf-8' }))


function cookieMiddleware (req,res,next){
    next()
    if(req.cookie.remember != undefined && req.session.user == undefined){

        
        var user = users.find(user=>user.email==req.cookie.remember)
        
                    
            }  req.session.user = req.cookie.remember;

            /*
            for (let i = 0; i < users.length ; i ++){
                if(users[i].email == req.cookie.email){
                    
                        var userLog = users[i];
                        break;
                
                }
            }
            req.session.userLogin = userLog
            */


        }
           
    


module.exports = cookieMiddleware;