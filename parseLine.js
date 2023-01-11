function parseLine(lineAsString) {
    let json = {};

    try {
        json = JSON.parse(lineAsString);
    } catch (e) {
        console.log(`Not a valid json: ${lineAsString}`);
        return {};
    }

    return {
        "requestId": json["requestId"] || "",
        "type": json["type"] || "",
        "payload": JSON.parse(json["payload"] || "{}"),
    };
}

module.exports = parseLine;