const express = require("express");
const app = express();
const fs = require("fs");
var bodyParser = require("body-parser");

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "*");
    next();
});
app.use(bodyParser.json());
require("./routes/routes.js")(app, fs);
const server = app.listen(3001, () => {
    console.log("listening on port %s...", server.address().port);
});