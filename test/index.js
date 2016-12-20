/* eslint-disable no-undef */

const assert = require("assert"),
    http = require("http");

const testOutput = `{"result":{"records":[{"keys":["name"],"length":1,"_fields":["test"],"_fieldLookup":{"name":0}}],"summary":{"statement":{"text":"CREATE (n:TestNode {name: \\"test\\"}) WITH n.name AS name, n as TestNode DELETE TestNode RETURN name","parameters":{}},"statementType":"rw","updateStatistics":{"_stats":{"nodesCreated":1,"nodesDeleted":1,"relationshipsCreated":0,"relationshipsDeleted":0,"propertiesSet":1,"labelsAdded":1,"labelsRemoved":0,"indexesAdded":0,"indexesRemoved":0,"constraintsAdded":0,"constraintsRemoved":0}},"plan":false,"profile":false,"notifications":[]}}}`;

describe("Neo4j Console", function() { // TODO: Add tests for all of the features of the project.
    describe("/statement/:statement", function() {
        it("should run the given statement and return the result", function() {
            return new Promise(function(resolve, reject) {
                const testURL = `http://localhost:3000/statement/${encodeURIComponent("CREATE (n:TestNode {name: \"test\"}) WITH n.name AS name, n as TestNode DELETE TestNode RETURN name")}`;
                console.log(`test URL: ${testURL}`);

                http.get(testURL, (res) => {
                    const statusCode = res.statusCode;
                    assert.equal(statusCode, 200);

                    let rawData = "";

                    res.on("data", function(chunk) {
                        rawData += chunk;
                    });
                    res.on("end", function() {
                        try {
                            console.log(`Raw data recieved is:\n${rawData}`);

                            assert.equal(rawData.toString(), testOutput);
                            resolve();
                        } catch (e) {
                            reject(e);
                        }
                    });
                }).on("error", (e) => {
                    console.error(`Error: ${e.message}.\n\n${e}`);
                    reject(e);
                });
            });
        });
    });
});
