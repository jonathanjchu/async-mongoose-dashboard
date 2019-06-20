const express = require("express"),
    mongoose = require("mongoose"),
    bp = require("body-parser"),
    DB_NAME = "mongoose_dashboard",
    cors = require("cors"),
    app = express(),
    port = 8000;

app.use(cors());
app.use(bp.json());

require('./server/utils/mongoose')(DB_NAME)
require('./server/utils/routes')(app)


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});