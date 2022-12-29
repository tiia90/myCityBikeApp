const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = 3000;

app.use(bodyParser.urlencoded ({ extended : true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

//adding connection to database, not using env. now
const mongoURL = 'mongodb+srv://tiia90:3heivaan4@cluster0.igutn.mongodb.net/moviedb?retryWrites=true&w=majority';
mongoose.connect(mongoURL, {useNewUrlParser: true , useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error'));

app.get("/", (req, res) => {
    res.render("index");
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