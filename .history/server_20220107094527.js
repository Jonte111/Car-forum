const express = require('express');
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:4000"
};

app.use(cors(corsOptions));

// parse requrests of content 