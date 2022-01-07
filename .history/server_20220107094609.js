const express = require('express');
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:4000"
};

app.use(cors(corsOptions));

// parse requrests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application