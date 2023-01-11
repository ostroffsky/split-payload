const fs = require('fs');

function writePayload(payloadJson) {
    let type = payloadJson['type'];
    let requestId = payloadJson['requestId'];
    let payload = payloadJson['payload'];

    if (!type || !requestId || !payload) {
        console.log("Skipping line...");
        return;
    }

    let requestIdEscaped = requestId.replaceAll('/', '_');
    let filename = `${type}_${requestIdEscaped}.json`;

    try {
        fs.writeFileSync(filename, JSON.stringify(payload, null, 2));

        console.log(`Successfully wrote ${type} for requestId: ${requestId} into ${filename}`);
    } catch (err) {
        console.error(err);
    }
}

module.exports = writePayload;