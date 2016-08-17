const db = require('db')({
    username: "neo4j",
    password: "admin"
});
const express = require('express'),
    path = require('path');

var app = express(),
    server = app.listen(3000, "0.0.0.0", function() {
        console.log('Listening on *:3000');
    });

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/statement/:statement', function(req, res, next) { // TODO: Send this information back to the index.html file, so the user can execute another statement.
    runStatement(decodeURIComponent(req.params.statement), function(result) {
        res.send(`<pre>${JSON.stringify(result.records, null, 4).split("\\\"").join("")}</pre>`);
        next();
    }, function(err) {
        next(`Got an error trying to run the statement:\n${err}`);
    });
});

function runStatement(statement, resolve, reject) {
    db.runStatement(statement, resolve, reject);
}