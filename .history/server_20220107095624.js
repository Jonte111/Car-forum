// import express and cors modules
// Express is for building the Rest apis
import express, { json, urlencoded } from "express";
// Cross Origin Resource Sharing (CORS)
// cors provides Express middleware to enable CORS
import cors from "cors";

const app = express();

var corsOptions = {
    origin: "http://localhost:4001"
};

app.use(cors(corsOptions));

// parse requrests of content-type - application/json
app.use(json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(urlencoded({ extended: true }));

// simple route
app.get("/",(req, res) => {
    res.json({ message: "Welcome to CAR application." });
});

// set port, listen for requests 
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});