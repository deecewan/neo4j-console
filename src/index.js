// Web interface

const config = require('config'),
    db = require('./db/index.js')(config.database),
    express = require('express'),
    path = require('path');

var app = express(),
    server = app.listen(config.app.port, function() {
        console.log('Listening on *:' + config.app.port);
        readline.prompt();
    });

app.use(express.static(path.join(__dirname, "/../", "public")));

app.get('/statement/:statement', function(req, res) {
    runStatement(decodeURIComponent(req.params.statement), function(result) {
        res.send(`<pre>${result}</pre>`);
    }, function(err) {
        res.send(`<p>Got an error trying to run the statement:</p><pre>${err}</pre>`);
    });
});

// Command Line interface

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.on('line', (line) => {
    runStatement(line.trim(), function(result) {
        console.log(result);
        readline.prompt();
    }, function(err) {
        console.log(err);
        readline.prompt();
    });
}).on('close', () => {
    console.log("Exiting Neo4j Console...");
    process.exit(0);
});

// General functions

function runStatement(statement, resolve, reject) {
    db.runStatement(statement, {}, function(result) {
        resolve(JSON.stringify(result.records, null, 4).replace(/\\"/, ''));
    }, function(err) {
        reject(JSON.stringify(err, null, 4).replace(/\\"/, ''));
    });
}