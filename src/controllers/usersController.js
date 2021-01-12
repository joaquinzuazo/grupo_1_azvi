const fs = require('fs')
const path = require('path')
const usersPathFile = path.join(__dirname, '..', 'data', 'users.json')
const users = JSON.parse(fs.readFileSync(usersPathFile, { encoding: 'utf-8' }))
const bcrypt=require('bcrypt');
const { json } = require('express');

const usersController = {
	loginForm: (req, res) => {
		res.render('login', { title: 'AZVI', style: 'login' })
	},

	registerForm: (req, res) => {
		res.render('register', { title: 'AZVI', style: 'register' })
    },

    register: (req, res) => {
        const user = users.find(user=>user.email==req.body.email)
        if(!user){
            req.body["id"]=users.length+1
            req.body["image"]="";
            req.body["admin"]=false;
            req.body.pass=bcrypt.hashSync(req.body.pass,10)
            users.push(req.body)
            fs.writeFileSync(usersPathFile, JSON.stringify(users))
            res.render('login', { title: 'AZVI', style: 'login', mensaje:"¡Registrado con exito, ingrese sus datos!"})
            }else{
                res.render('register', { title: 'AZVI', style: 'register', mensaje:"El email ya se encuentra registrado."})
            }
    },
    
    login:(req,res)=>{
        const {email,password} = req.body
        const user = users.find(user=>user.email==email)
        if (user){
            const passwordIsTrue = bcrypt.compareSync(password,user.pass)
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
