const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const PORT = 8080;

const app = express();

app.use(morgan());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongod://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false
})

// Routes here

app.listen(PORT, () => {
    console.log("App running on http://localhost:" + PORT);
})