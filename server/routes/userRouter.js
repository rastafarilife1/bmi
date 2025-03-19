const Router = require('express')
const router = new Router
const userController = require('../controllers/userController')
const authMidddleware = require('../middleware/authMiddleware')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', authMidddleware, userController.check)



module.exports = router