#!/usr/bin/env node

const readline = require('readline');
const stream = require('stream');
const fs = require('fs');

const stdin = process.openStdin();

let data = "";
let bufferStream = new stream.PassThrough();

stdin.on('data', function(chunk) {
    data += chunk.toString();
});

stdin.on('end', function() {
    bufferStream.end(data);

    let rl = readline.createInterface({
        input: bufferStream,
    });

    let jsons = [];
    let request = {}, response = {};

    rl.on('line', function (line) {
        jsons.push(JSON.parse(line));
    });

    rl.on('close', function () {


        if (jsons.length !== 2) {
            console.log("Should be 2 lines! Lines found: " + jsons.length);
            return;
        }

        request = JSON.parse(jsons[0].payload);
        response = JSON.parse(jsons[1].payload);

        try {
            fs.writeFileSync('request.json', JSON.stringify(request, null, 2));
            fs.writeFileSync('response.json', JSON.stringify(response, null, 2));
            console.log("Successfully wrote request.json and response.json");
        } catch (err) {
            console.error(err);
        }

    });

});