const express = require('express');
const router = express.Router();
const Auth = require('../middlewares/authMiddleware')
const {
    createUser,
    updateUser,
    deleteUser, 
} = require('../controllers/usercontroller');

router.route('/')
  .post(createUser);

router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);


module.exports = router