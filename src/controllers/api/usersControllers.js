let db = require('../../database/models')

let usersControllers = {
    list: async(req, res)=>{
        const{count, rows: users} = await db.Users.findAndCountAll({
            attributes:['id', 'name', 'email','lastname','image'],
        })

        const usersDetails = users.map((user)=>({ ...user['dataValues'], detail: `api/users/${user.id}`}))

        const response = {
            count, 
            users: usersDetails,
        }                                 
        res.send(response)
    },
    user:async(req, res)=>{
        const userId=req.params.id
        const {id,name,lastname,email,image}=await db.Users.findByPk(userId)
        const data={
            id:id,
            name:name,
            lastname:lastname,
            email:email,
            image:`http://localhost:3050/images/users/${image}`
        }
        res.status(200).json(data)
    },
}

module.exports = usersControllers