const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
    methods: "POST, GET"
}

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));




app.get("/", (req,res) => {
    res.json({message: "Welcome to app"});
});



require("./app/routes/consultas.routes")(app);

app.listen(3000, () => {
    console.log("Server running on port  3000");
});