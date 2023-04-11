//Creamos nuestra base de datos

const mongoose = require('mongoose');

URI =
  'mongosh "mongodb://mongo:plpT9Qnq6OWBidG4M3Mg@containers-us-west-35.railway.app:5843"';

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log('Base de datos conectado', db.connection.name))
  .catch((error) => console.log(error));

module.exports = mongoose;
