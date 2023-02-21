const router = require('express').Router();
const roomRouter = require('../route/roomroute');
const userRouter = require('../route/userroute');

router.use('/room', roomRouter);
router.use('/user', userRouter)

module.exports = router