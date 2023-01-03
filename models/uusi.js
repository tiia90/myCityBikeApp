const mongoose = require('mongoose');
const stationstSchema = {
    ID: Number, 
    Nimi: String,
    Osoite: String
}

module.exports = mongoose.model('Stationt', stationstSchema);