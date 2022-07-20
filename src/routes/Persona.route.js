const {Router} = require( 'express') 
const router = Router() 
const PersonaCtrl = require('../controller/Persona.controller')

router.post('/crear', PersonaCtrl.crear)

module.exports=router 