const fs = require('fs')
const path = require('path')
const usersPathFile = path.join(__dirname, '..', 'data', 'users.json')
const users = JSON.parse(fs.readFileSync(usersPathFile, { encoding: 'utf-8' }))
const bcrypt=require('bcrypt');
const { validationResult } = require('express-validator');
const session = require('express-session');
 



const usersController = {
	loginForm: (req, res) => {
		res.render('login', { title: 'AZVI', style: 'login' })
	},

	registerForm: (req, res) => {
		res.render('register', { title: 'AZVI', style: 'register',errors:{},body:{} })
    },

    register: (req, res) => {

        const errors = validationResult(req)
        
        if(!errors.isEmpty()){
            return res.render('register',{title: 'AZVI', style: 'register',errors:errors.mapped() , body:req.body})
        }

		if (!errors.isEmpty()) {
			return res.render('register', { title: 'AZVI', style: 'register', errors: errors.mapped(), body: req.body })
		}

		const user = users.find((user) => user.email == req.body.email)

		if (!user) {
			req.body['id'] = users.length + 1
			req.body['image'] = 'generalAvatar.png'
			req.body['admin'] = false
			req.body.password = bcrypt.hashSync(req.body.password, 10)
			users.push(req.body)
			fs.writeFileSync(usersPathFile, JSON.stringify(users, null, 2))
			res.render('login', { title: 'AZVI', style: 'login', mensaje: '¡Registrado con exito, ingrese sus datos!' })
		} else {
			res.render('register', {
				title: 'AZVI',
				style: 'register',
				mensaje: 'El email ya se encuentra registrado.',
				body: req.body,
				errors: {},
			})
		}
	},

        // if(!user){
        //     req.body["id"]=users.length+1
        //     req.body["image"]="generalAvatar.png";
        //     req.body["admin"]=false;
        //     req.body.password=bcrypt.hashSync(req.body.password,10)
        //     users.push(req.body)
        //     fs.writeFileSync(usersPathFile, JSON.stringify(users,null,2))
        //     res.render('login', { title: 'AZVI', style: 'login', mensaje:"¡Registrado con exito, ingrese sus datos!"})
        //     }else{
        //         res.render('register', { title: 'AZVI', style: 'register', mensaje:"El email ya se encuentra registrado.",body:req.body,errors:{}})
        //     }
    
    
    login:(req,res)=>{
        const {email,password} = req.body
        const user = users.find(user=>user.email==email)
        if (user){
            const passwordIsTrue = bcrypt.compareSync(password,user.password)
            if(passwordIsTrue){
                req.session.user = {...user,password:''}

                   /*
            for (let i = 0; i < users.length ; i ++){
                if(users[i].email == req.body.email){
                    if(bcrypt.compareSync(req.body.password, users[i].password)){

                        var userLog = users[i];
                        break;
                    }
                }
            }
            req.session.userLogin = userLog
                */
                //cookies
                if(req.body.remember != undefined){
                    res.cookie('remember', req.session.user.email , {maxAge:90000})
                }

                res.redirect('/')
             

            }else{
                res.render('login', {mensaje:'Credenciales invalidas',style: 'login',title:'AZVI'})
            }
        }else{
            res.render('login',{mensaje:'Credenciales invalidas',style: 'login',title:'AZVI'})
        }
     },
    logout:(req,res)=>{

        req.session.destroy(err=>{
            res.redirect('/')
        })
     },
    profile:(req,res,next)=>{
        res.render('userData',{title:'Mis Datos',style:'userDataForm', session:res.locals.userLog})
    },
    editProfile:(req,res,next)=>{
        var user=users.map(function(dato){
            if(dato.id==res.locals.userLog.id){
                dato.image=req.files[0].filename
                return dato
            }
            return dato
        });
        fs.writeFileSync(usersPathFile, JSON.stringify(user,null,2))
        res.redirect("/")
    },

}

module.exports = usersController
