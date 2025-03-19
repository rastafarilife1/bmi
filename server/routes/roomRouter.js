const Router = require('express')
const router = new Router
const RoomController = require('../controllers/roomController')
const checkRoleMidddleware = require('../middleware/checkRoleMiddleware')

router.post('/', RoomController.create)
router.get('/', RoomController.getAll)
router.get('/:id', RoomController.getOne)



module.exports = router