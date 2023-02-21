const UserService= require('../services/userService')
const bcrypt = require('bcryptjs')
class UserController{

    async createUser(req, res) {
        const reqBody = req.Body

        const existingUser = await UserService.fetchOneUser({
            name : reqBody.name.toLowerCase()
        })

        if(existingUser) res.status(403).json({
            success : false,
            message : "User already exist"
        })

        const newUser = await UserService.createUser(reqBody)
        res.status(201).json({
            success : true,
            message : "User sucessfully created",
            data : newUser
        })
    }

    async updateUser(req, res) {
        const UserId = req.params.id;
        const updateData = req.body;

        const existingUser = await UserService.fetchOneUser({
            _id : UserId
        })

        if(!existingUser) {
            res.status(403).json({ 
                success : false,
                message : "User with this ID does not exist"
            })

            if(updateData.name){
                const existingUserWithThisUpdateName = await UserService.fetchOneUser({
                    name : updateData.name.lowercase()
                })
                if(existingUserWithThisUpdateName._id.toString() === existingUser._id.toString()) {
                    res.status(403).json({
                        success : false,
                        message : "User with this name already exist",
                        // data : updatedData
                    })  
                }
            }
            
                const updatedData = await UserService.updateUser(UserId,updateData)
                res.status(200).json({
                    success : true,
                    message : "User updated succesfully",
                    data : updatedData
                })
            }
        
    }
   
     async deleteUser(req, res) {
        const Id = req.params.id

        const existingUser = await UserService.fetchOneUser({
            _id : UserId
        })
        if(!existingUser)res.status(403).json({
            success : false,
            message : "Room with this Id des not exist."
        })

        const deleteUser = await UserService.deleteUser({
            id : UserId
        })
        res.status(200).json({
            success : true,
            message : "User deleted successfully"
        })
     }

     async login(req, res) {
        const user = await User.findOne({ email: req.body.email });
        if (!user) return res.status(400).send({ success: false, message: 'Invalid email  or password' });
    
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) return res.status(400).send({ success: false, message: 'Invalid password or email' });
    
        const token = user.generateAuthToken();
    
        res.header('token', token).status(200).send({
          success: true,
          message: 'login success',
          data: { ...user.toJSON(), token }
        });
      }

    
     }

     module.exports = new UserController()