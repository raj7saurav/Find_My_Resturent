const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Restaurant = require('./models/restaurant.model'); 
const dbConfig = require('./configs/db.config');
const serverConfig = require('./configs/server.config');

const app = express();
const port = process.env.PORT || 3000;


app.use(bodyParser.json());

mongoose.connect(dbConfig.DB_URL);
const db =mongoose.connection;
db.on("error" , () => {
    console.log("Getting error while connecting to DB")
})

db.once("open" , () => {
    console.log(" Connecting to database ")
})



app.listen(serverConfig.PORT, () => {
    console.log(`Server is running on port ${serverConfig.PORT}`);
});
