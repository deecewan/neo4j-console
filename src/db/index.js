var neo4j = require("neo4j-driver").v1;
var driver;

// Module exports

module.exports = DB;

// DB constructor function

function DB(options) {
    if (!(this instanceof DB)) {
        return new DB(options);
    }

    this.username = options.username;
    this.password = options.password;
    this.url = options.url;
    driver = neo4j.driver(this.url, neo4j.auth.basic(this.username, this.password));
}

DB.prototype.closeDriver = function() {
    driver.close();
};

// Exports functions

DB.prototype.runStatement = function(statement, params) {
    var session = driver.session();

    return new Promise(function(resolve, reject) {
        session
            .run(statement, params)
            .then(function(result) {
                session.close();
                resolve(result);
            }).catch(reject);
    });
};
