// import express and cors modules
// Express is for building the Rest apis
const express = require("express");
// Cross Origin Resource Sharing (CORS)
// cors provides Express middleware to enable CORS
const cors = require("cors");

const app = express();

let corsOptions = {
    origin: "http://localhost:4001"
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
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

const db = require ("./app.models");
const dbConfig = require("./app/config/db.config");
const Role = db.role;

db.mongoose
.connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
})
.catch(err => {
    console.error("Connection error", err);
})