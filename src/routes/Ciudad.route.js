const {Router} = require( 'express') 
const router = Router() 
const CiudadCtrl = require('../controller/Ciudad.controller')

router.post('/crear',CiudadCtrl.crearCiudad)

module.exports=router 