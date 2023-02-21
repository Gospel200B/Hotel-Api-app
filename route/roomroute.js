
const express = require('express');
const router = express.Router();

const {
    createRoom,
    updateRoom,
    deleteRooms, 
    fetchOne,
    fetchAll
} = require('../controllers/controller');
 
router.post('/', createRoom);
router.get('/:id', fetchOne);
router.patch('/:id', updateRoom);
router.delete('/:id', deleteRooms);
router.get('/', fetchAll)

module.exports = router