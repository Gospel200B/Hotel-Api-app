const roomServices = require('../services/roomServices');


class controller{

    async createRoom(req, res) {
        const reqBody = req.Body

        const existingRoom = await roomServices.fetchOne({
            name : reqBody.name.toLowerCase()
        })

        if(existingRoom) res.status(403).json({
            success : false,
            message : "Room already exist"
        })

        const newRoom = await roomServices.create(reqBody)
        res.status(201).json({
            success : true,
            message : "Room sucessfully created",
            data : newRoom
        })
    }

    async updateRoom(req, res) {
        const RoomId = req.params.id;
        const updateData = req.body;

        const existingRoom = await roomServices.fetchOne({
            _id : RoomId
        })

        if(!existingRoom) {
            res.status(403).json({ 
                success : false,
                message : "Room with this ID does not exist"
            })

            if(updateData.name){
                const existingRoomWithThisUpdateName = await roomServices.fetchOne({
                    name : updateData.name.lowercase()

                    

                })
                const updatedData = await roomServices.updateRoom(RoomId,updateData)
                res.status(200).json({
                    success : true,
                    message : "Room updated succesfully",
                    data : updatedData
                })
            }
        }
    }
   
     async deleteRooms(req, res) {
        const RoomId = req.params.id

        const existingRoom = await roomServices.fetchOne({
            _id : RoomId
        })
        if(!existingRoom)res.status(403).json({
            success : false,
            message : "Room with this Id des not exist."
        })

        const deleteRoom = await roomServices.deleteRoom({
            id : RoomId
        })
        res.status(200).json({
            success : true,
            message : "Room deleted successfully"
        })
     }

     async fetchOne(req, res) {
        const RoomId = req.params.id

        const existingRoom = await roomServices.fetchOne({_id : RoomId})

        if(!existingRoom) res.status(403).json({
            success : false,
            message : " Room does not exist"
        })
         res.status(200).json({
            success : true,
            message : "Room fetched"
         })

     }

     async fetchAll(req, res) {
        const fetchAll = await roomServices.fetchAll({})

        res.status(200).json({
            success : true,
            message : " All rooms fetched succesfully",
            data : fetchAll
        })
     }
}

module.exports = new controller()