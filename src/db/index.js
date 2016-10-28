var neo4j = require('neo4j-driver').v1;
var driver;

// Module exports

module.exports = DB;

// DB constructor function

function DB(credentials) {
	if (!(this instanceof DB)) {
		return new DB(credentials);
	}

	this.username = credentials.username;
	this.password = credentials.password;
	driver = neo4j.driver("bolt://localhost", neo4j.auth.basic(this.username, this.password));
}

DB.prototype.closeDriver = function() {
	driver.close();
}

// Exports functions

DB.prototype.runStatement = function(statement, params, resolve, reject) {
	var result;
	var session = driver.session();
	session
		.run(statement, params)
		.then(function(result) {
			session.close();
			resolve(result);
		}).catch(reject);
}