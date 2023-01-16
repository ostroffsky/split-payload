const fs = require('fs');

function writePayload(payloadJson) {
    let type = payloadJson['type'];
    let method = payloadJson['uri'];
    let requestId = payloadJson['requestId'];
    let payload = payloadJson['payload'];

    if (!type || !requestId || !payload) {
        console.log("Skipping line...");
        return;
    }

    let requestIdEscaped = requestId.replace(/\//g, '_');
    let methodEscaped = method.replace(/\//g, '_');
    let filename = `${type}_${methodEscaped}_${requestIdEscaped}.json`;

    try {
        fs.writeFileSync(filename, JSON.stringify(payload, null, 2));

        console.log(`Successfully wrote ${type} for requestId: ${requestId} into ${filename}`);
    } catch (err) {
        /* istanbul ignore next */
        console.error(err);
    }
}

module.exports = writePayload;