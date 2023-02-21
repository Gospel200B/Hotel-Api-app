const roomModel = require('../model/roomModel')


class roomServices{
    async create(Roomdata){
        return await roomModel.create(Roomdata)
    }
    async fetchAll(filter) {
        return await roomModel.find(filter)
    }

    async fetchOne(RoomId) {
        return await roomModel.findOne({_Id: Id})
    }

    async updateRoom(Id, roomData) {
        return await roomModel.findOneAndUpdate(RoomId, roomData, {
            new : true
        })
    }

    async deleteRoom(RoomId) {
        return await roomModel.findOneAndDelete(RoomId)
    }
}

module.exports = new roomServices()