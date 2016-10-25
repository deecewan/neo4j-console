const config = require('config');
const db = require('db')(config.db);
const open = require('open');
const express = require('express'),
	path = require('path');

var app = express(),
	server = app.listen(config.app.port, function() {
		console.log('Listening on *:' + config.app.port);
		open('http://127.0.0.1:' + config.app.port);
	});

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/statement/:statement', function(req, res, next) { // TODO: Send this information back to the index.html file, so the user can execute another statement.
	db.runStatement(decodeURIComponent(req.params.statement), {}, function(result) {
		res.send(`<pre>${JSON.stringify(result.records, null, 4).split("\\\"").join("")}</pre>`);
		next();
	}, function(err) {
		next(`Got an error trying to run the statement:\n${err}`);
		res.send(`<pre>${JSON.stringify(err, null, 4).split("\\\"").join("")}</pre>`);
	});
});
