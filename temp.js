var express = require('express');
var exampleRouter = require("./example-router");
var app = express();

app.use("/example", exampleRouter);

app.get('/', function (req, res) {
    res.send('Hello Worlds!II');
});
app.listen(8080);
console.log("load at port 8080");