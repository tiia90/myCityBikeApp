const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const ejs = require('ejs');
const port = 3000;
const Route = require('./models/bikeroute');
const Station = require('./models/bikestation');

app.use(bodyParser.urlencoded ({ extended : true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
mongoose.set('strictQuery', false);

//adding connection to database, not using env. now
mongoose.connect('mongodb+srv://tiia90:3heivaan4@cluster0.igutn.mongodb.net/bikeRoutes?retryWrites=true&w=majority');



app.get("/", (req, res) => {
    Station.find({}, function(err, stations) {
    res.render('index', {
        stationsList: stations
    })
})
})


app.get("/getroutes/", (req, res) => {
    res.render('bikeroutess')
   });

app.post("/getroutes", async (req, res) => {
    Route.find({}, function(err, routes) {
        res.render('bikeroutes', {
            
            routesList: routes
        })
    })
    })

    /*app.post("/getroutes/:key",async (req,resp)=>{
        let data = await Route.find(
            {
                "$or":[
                    {nimi:{$regex:req.params.key}},
                    {osoite:{$regex:req.params.key}}
                ]
            }
        );
       
    
    })*/



app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${port}.`); 
})