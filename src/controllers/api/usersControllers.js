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
}

module.exports = usersControllers