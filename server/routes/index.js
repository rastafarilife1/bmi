const Router = require('express')
const router = new Router
const roomRouter = require('./roomRouter')
const userRouter = require('./userRouter')



router.use('/user', userRouter)
router.use('/room', roomRouter)



module.exports = router