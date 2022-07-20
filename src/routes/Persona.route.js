const { Router } = require("express");
const router = Router();
const PersonaCtrl = require("../controller/Persona.controller");

router.post("/crear", PersonaCtrl.crear);
router.get("/listarPersonas", PersonaCtrl.listar);
router.get("/listar/:id", PersonaCtrl.listarId);
router.get("/listarCriterio/:criterio", PersonaCtrl.buscarPersonaCriterio);
router.delete("/eliminar/:id", PersonaCtrl.eliminar);
router.put("/actualizar/:id", PersonaCtrl.actualizar);
module.exports = router;


