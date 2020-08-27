const express = require("express");
const app = express(); // create express app
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

//Middlewares
app.use(cors());
app.use(bodyParser.json());
const astroRoute = require("./Routes/routes");

app.use('/logs', astroRoute);


//Launch App
app.get("/", (req, res) => {
  res.send("We're Oozma Kappa");
});

//Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}, () =>
    console.log("Connected to DB")
);


// start express server on port 5000
app.listen(5000, () => {
  console.log("server started on port 5000");
});