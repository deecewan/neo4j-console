const db = require('db')({
        username: "neo4j",
        password: "admin"
    }),
    readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

readline.prompt();

readline.on('line', (line) => {
    db.runStatement(line.trim(), {}, function(result) {
        console.log(`${JSON.stringify(result.records, null, 4).split("\\\"").join("")}`);
        readline.prompt();
    }, function(err) {
        console.log(`Got an error trying to run the statement:\n${err}`);
        readline.prompt();
    });
}).on('close', () => {
    console.log("Exiting Neo4j Browser...");
    process.exit(0);
});