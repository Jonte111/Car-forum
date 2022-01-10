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

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

// set port, listen for requests 
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

const db = require ("./app/models");
const dbConfig = require("./app/config/db.config.env");
const Role = db.role;

db.mongoose
.connect(`mongodb://${dbConfig.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
})
.catch(err => {
    console.error("Connection error", err);
    process.exit();
});

// initial() function helps us to create 3 important rows in roles collection.
function initial() {
    Role.estimatedDocumentCount((err, count) => {
        if(!err && count === 0) {
            new Role({
                name: "user"
            }).save(err => {
                if(err) {
                    console.log("error", err);
                }

                console.log("added 'user' to roles collection");
            });

            new Role({
                name: "moderator"
            }).save(err => {
                if(err) {
                    console.log("error", err);
                }

                console.log("added 'moderator' to roles collection");
            });

            new Role({
                name: "admin"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'admin' to roles collection");
            });
        }
    });
}