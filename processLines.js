const parseLine = require('./parseLine');
const writePayload = require('./writePayload');

function processLines(lines) {
    if (lines.length === 0) {
        console.log("Nothing found");
        return;
    }

    let payloadJsons = [];
    for (const lineAsString of lines) {
        if (lineAsString) {
            let parsedLine = parseLine(lineAsString);
            if (parsedLine) {
                payloadJsons.push(parsedLine);
            }
        }
    }

    for (const payloadJson of payloadJsons) {
        writePayload(payloadJson);
    }
}

module.exports = processLines;