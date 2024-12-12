const express = require('express')
const router = express.Router()
const CrudController = require('../controllers/CrudController')

router.get('/',CrudController.Home)
router.get('/cadastro',CrudController.CadastroUser)
router.post('/cadastro/add',CrudController.CadastroAdd)
router.get('/lista', CrudController.ListUser)
router.get('/edit/:id',CrudController.EditUser)
router.post('/edit/add',CrudController.EditAdd)
router.post('/edit/delete/:id',CrudController.DeleteUser)

module.exports = router