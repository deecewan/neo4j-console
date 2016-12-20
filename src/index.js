// Web interface

const config = require("../config/default.json"),
    db = require("./db/index.js")(config.database),
    express = require("express"),
    path = require("path");

var app = express();

app.listen(config.app.port, function() {
    console.log("Listening on *:" + config.app.port);
    readline.prompt();
});

app.use(express.static(path.join(__dirname, "public")));

app.get(/(js|css|fonts)/, express.static(path.join(__dirname, "../node_modules/bootstrap/dist")));

app.get("/statement/:statement", function(req, res) {
    res.set("Access-Control-Allow-Origin", "*");

    const statement = decodeURIComponent(req.params.statement),
        params = {};

    db.runStatement(statement, params)
        .then(function(result) {
            res.status(200).send({
                result: result
            });
        })
        .catch(function(err) {
            res.status(500).send({
                err: err
            });
        });
});

// Command Line interface

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline
    .on("line", function(line) {
        const statement = line.trim(),
            params = {};

        db.runStatement(statement, params)
            .then(function(result) {
                console.log(result);
                readline.prompt();
            })
            .catch(function(err) {
                console.log(err);
                readline.prompt();
            });
    })
    .on("close", () => {
        console.log("Exiting Neo4j Console...");
        db.closeDriver();
        process.exit(0);
    });
