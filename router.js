const express = require('express');
const router = express.Router();
const Route = require('./models/bikeroute');
const Station = require('./models/bikestation');

router.get("/", (req, res) => {
    Station.find({}, function(err, stations) {
    res.render('index', {
        stationsList: stations
    })
})
})


router.get("/getroutes/", (req, res) => {
    res.render('bikeroutess')
   });

router.post("/getroutes", async (req, res) => {
    Route.find({}, function(err, routes) {
        res.render('bikeroutes', {
            
            routesList: routes
        })
    })
    })
module.exports = router;