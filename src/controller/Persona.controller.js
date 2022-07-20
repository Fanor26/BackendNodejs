const PersonaCtrl= {} 
const Persona = require('../models/Persona.models')

PersonaCtrl.crear=async(req,res)=>{ 

    const{nombres, apellidos, ciudad, estadoVacuna, dosisAplicadas, ciudadNombre}= req.body 

const NuevaPersona = new Persona({

    nombres, 
    apellidos,
    ciudad, 
    estadoVacuna, 
    dosisAplicadas, 
    ciudadNombre
})
const respuesta = await NuevaPersona.save()
res.json({
    mensaje:'Persona Creada',
    respuesta
})
}
module.exports = PersonaCtrl