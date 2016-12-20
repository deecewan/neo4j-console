/* eslint-disable */

function runStatement() {
    var statementField = document.getElementById("statement");
    var value = statementField.value;
    statementField.value = "";

    var req = new XMLHttpRequest();

    req.onreadystatechange = () => {
        if (req.readyState == 4) {
            const isErr = (req.status != 200);
            outputResult(req.responseText, isErr);
        }
    };

    req.open("GET", "http://localhost:3000/statement/" + encodeURIComponent(value), true);
    req.send();
}

function outputResult(result, isErr) {
    var parsedResult, contents;
    if (result == "") {
        contents = "Error: server is unreachable.";
    } else {
        parsedResult = JSON.parse(result);
        contents = JSON.stringify((isErr ? parsedResult.err : parsedResult.result), null, 4);
    }

    var pre = document.createElement("pre");

    pre.appendChild(document.createTextNode(contents));
    pre.setAttribute("class", `pre-scrollable ${isErr ? "red-result" : "green-result"}`);

    var results = document.getElementById("results");
    results.insertBefore(pre, results.firstChild);
}
