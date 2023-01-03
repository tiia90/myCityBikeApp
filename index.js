const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const ejs = require('ejs');
const port = 3000;
const routes = require("./router")
const Route = require('./models/bikeroute');
const Station = require('./models/bikestation');
const Stationt = require('./models/uusi');

app.use('/', routes);
app.use(bodyParser.urlencoded ({ extended : true }));
app.set('view engine', 'ejs');
mongoose.set('strictQuery', false);

//adding connection to database, not using env. now
mongoose.connect('mongodb+srv://tiia90:3heivaan4@cluster0.igutn.mongodb.net/bikeRoutes?retryWrites=true&w=majority');


app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${port}.`); 
})