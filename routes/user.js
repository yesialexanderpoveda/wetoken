//CREAMOS RUTAS PARA USUARIO COMUN ICORRIENTE
const express = require('express');
const validationToken = require('../middlewares/signIn')
const controllerUser = require('../controllers/user')
const router = express.Router()

router.get('/api', validationToken.validationToken, controllerUser.getcontroller);

router.get('/loggin', controllerUser.loggin)


router.post('/auth', controllerUser.auth)

module.exports = router;