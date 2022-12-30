const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const ejs = require('ejs');
const port = 3000;

app.use(bodyParser.urlencoded ({ extended : true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

mongoose.set('strictQuery', false);

//adding connection to database, not using env. now
mongoose.connect('mongodb+srv://tiia90:3heivaan4@cluster0.igutn.mongodb.net/bikeRoutes?retryWrites=true&w=majority');


const stationsSchema = {
    Nimi: String
}
const Station = mongoose.model('Station', stationsSchema);

app.get("/", (req, res) => {
    Station.find({}, function(err, stations) {
    res.render('index', {
        stationsList: stations
    })
})
})

app.get("/getroutes", (req, res) => {
    res.render("routes")

});

app.post("/getroutes", (req, res) => {
    
    console.log(req.body.Nimi)
});


app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${port}.`); 
})