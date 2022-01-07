// Start an express server
const express = require('express');
// Cross Origin Resource Sharing (CORS)
// is a browser security feature that restricts 
// cross-origin HTTP requests that are initiated from scripts running in the browser.
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:4000"
};

app.use(cors(corsOptions));

// parse requrests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/",(req, res) => {
    res.json({ message: "Welcome to CAR application." });
});

// set port, listen for requests 
