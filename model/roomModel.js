const mongoose = require('mongoose');
// const roomservices = require('../services/roomservices');

const Rooms = mongoose.Schema({
    RoomName : {
        type : String,
        required : true,
        unique : true,
        trim : true,
        lowerCase : true,
    },
    RoomType : {
        type : String,
        required : true,
        trim : true,
        lowerCase: true,
        enum : ['Exclusive suite', 'Standard suite']
    },
    Price : {
        type : Number,
        required : true,
    }
})
const roomModel = mongoose.model('Rooms', Rooms);
module.exports = roomModel; 