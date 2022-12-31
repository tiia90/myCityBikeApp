const mongoose = require('mongoose');

const routesSchema = {
    nimi: String,
    osoite: String,
    numero: String
}
module.exports = mongoose.model('Route', routesSchema);

