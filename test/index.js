/* eslint-disable no-undef */

const assert = require("assert"),
    http = require("http");

describe("Neo4j Console", function() { // TODO: Add tests for all of the features of the project.
    before("set database password", function() {
        return new Promise(function(resolve, reject) {
            const testURL = `http://localhost:3000/restart/${encodeURIComponent("admin")}`;

            http.get(testURL, (res) => {
                const statusCode = res.statusCode;
                assert.equal(statusCode, 200);

                resolve();
            }).on("error", (e) => {
                reject(e);
            });
        });
    });

    describe("/statement/:statement", function() {
        it("should run the given statement and return the result", function() {
            return new Promise(function(resolve, reject) {
                const testURL = `http://localhost:3000/statement/${encodeURIComponent("CREATE (n:TestNode {name: \"test\"}) WITH n.name AS name, n as TestNode DELETE TestNode RETURN name")}`;

                http.get(testURL, function(res) {
                    const statusCode = res.statusCode;
                    assert.equal(statusCode, 200);

                    let rawData = "";

                    res.on("data", function(chunk) {
                        rawData += chunk;
                    });

                    res.on("end", function() {
                        try {
                            rawData = JSON.parse(rawData);

                            assert.equal(rawData.result.records[0]["_fields"][0], "test");
                            resolve();
                        } catch (e) {
                            reject(e);
                        }
                    });
                }).on("error", (e) => {
                    reject(e);
                });
            });
        });
    });
});
