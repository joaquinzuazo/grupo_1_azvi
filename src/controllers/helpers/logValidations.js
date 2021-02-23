var {check}=require('express-validator');


module.exports={
        login:[
                check('email').isEmail().withMessage('El formato del email no es correcto.'),
                check('password').notEmpty().withMessage('El campo de password no puede estar vacio.')
            ]
}