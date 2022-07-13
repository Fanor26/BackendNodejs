const mongoose = require('mongoose') 
const {Schema}= mongoose 



const VacunadosSchema = new Schema({ 
nombres:{type:String, required: [true, 'Nombre Obiigatorio']} ,
apellidos:String,
ciudad:String,
Correo:String,
estadVacuna:String,
dosisAplicadas:String,
ciudadNombre:String,
date:{type:Date,default:Date.now} 

})
//Convertir modelo 
module.exports= mongoose.model('primeroasec',VacunadosSchema) 