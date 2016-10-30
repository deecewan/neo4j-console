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
    db.runStatement(decodeURIComponent(req.params.statement), {}, function(result) {
        res.send(`<pre>${JSON.stringify(result.records, null, 4).replace(/\\"/, '')}</pre>`);
    }, function(err) {
        res.send(`<p>Got an error trying to run the statement:</p><pre>${JSON.stringify(err, null, 4).replace(/\\"/, '')}</pre>`);
    });
});

// Command Line interface

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.on('line', (line) => {
    db.runStatement(line.trim(), {}, function(result) {
        console.log(JSON.stringify(result.records, null, 4).replace(/\\"/, ''));
        readline.prompt();
    }, function(err) {
        console.log(`Got an error trying to run the statement:\n${JSON.stringify(err, null, 4).replace(/\\"/, '')}`);
        readline.prompt();
    });
}).on('close', () => {
    console.log("Exiting Neo4j Console...");
    process.exit(0);
});