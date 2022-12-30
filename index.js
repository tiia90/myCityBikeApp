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
    ID: Number, 
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

const routesSchema = {
    nimi: String
}
const Route = mongoose.model('Route', routesSchema);

app.get("/getroutes", (req, res) => {
    Route.find({}, function (err, routes) {
        res.render('bikeroutes', {
            routesList: routes
        })
    })

});

app.post("/getroutes", (req, res) => {
    res.render("routes")
    console.log(req.body.ID)
});


app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${port}.`); 
})