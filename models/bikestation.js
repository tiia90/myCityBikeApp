const mongoose = require('mongoose');

const stationsSchema = {
    ID: Number, 
    Nimi: String
}


module.exports = mongoose.model('Station', stationsSchema);

