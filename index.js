const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.urlencoded ({ extended : true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

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