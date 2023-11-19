require('dotenv').config()
var express = require("express");
var cors = require("cors");
var app = express();

var mysql = require("mysql2");
var connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

// var mysql      = require('mysql2');
// var connection = mysql.createConnection({
//   host     : 'http://192.168.0.108:3305/',
//   user     : 'napat',
//   password : 'napat1234',
//   database : 'napatcode'
// });

app.use(cors());

app.get("/helloworld", function (req, res, next) {
    res.json({ msg: "hello hello" });
});

app.get("/users", function (req, res, next) {
    connection.query(
        "SELECT * FROM `users`",
        function (error, results, fields) {
            res.json(results);
        }
    );
});

app.listen(5000, function () {
    console.log("CORS-enabled web server listening on port 5000");
});
