
const lodah = require('lodash')
const { default: mongoose } = require('mongoose')
const{usermodel, userValidator} = require('../model/usermodel')


const {isValidateObjectId} = mongoose;
class UserService {
    async createUser(data) {
        return await usermodel.create(data)
    }
    async updateUser(id, data) {
        return await usermodel.findOneAndUpdate(id, data)
    }

    async deleteUser(id){
        return await usermodel.findOneAndDelete(id)
    }
    async fetchOneUser(filter){
        return await usermodel.findOne(filter)
    }
    async fetchAllUser(filter){
        return await usermodel.find(filter)
    }
}

module.exports = new UserService()