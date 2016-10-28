const config = require('config'),
    db = require('./db')(config.db),
    express = require('express'),
    path = require('path');

var app = express(),
    server = app.listen(config.app.port, function() {
        console.log('Listening on *:' + config.app.port);
    });

app.use(express.static(path.join(__dirname, "/../", config.app.publicDirectory)));

app.get('/statement/:statement', function(req, res) {
    db.runStatement(decodeURIComponent(req.params.statement), {}, function(result) {
        res.send(`<pre>${JSON.stringify(result.records, null, 4).replace(/\\"/, '')}</pre>`);
    }, function(err) {
        res.send(`<p>Got an error trying to run the statement:</p><pre>${JSON.stringify(err, null, 4).replace(/\\"/, '')}</pre>`);
    });
});