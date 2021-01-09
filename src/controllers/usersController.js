const fs = require('fs')
const path = require('path')
const usersPathFile = path.join(__dirname, '..', 'data', 'users.json')
const users = JSON.parse(fs.readFileSync(usersPathFile, { encoding: 'utf-8' }))

const usersController = {
	loginForm: (req, res) => {
		res.render('login', { title: 'AZVI', style: 'login' })
	},

	registerForm: (req, res) => {
		res.render('register', { title: 'AZVI', style: 'register' })
    },
    
    login:(req,res)=>{

        const {email,password} = req.body
        const user = users.find(user=>user.email==email)
        if (user){
            const passwordIsTrue = password  == user.password
            if(passwordIsTrue){
                req.session.user = {...user,password:''}
                 
    
                res.redirect('/')
            }else{
                res.redirect('/login')
            }
        }else{
             
            res.redirect('/login')
        }
    
     
    
     },
     logout:(req,res)=>{

        req.session.destroy(err=>{
            res.redirect('/')
        })
     }
}

module.exports = usersController
