#!/usr/bin/env node

const processLines = require('./processLines');
const splitToLinesAndProcess = require('./splitToLinesAndProcess');

const stdin = process.openStdin();
let data = "";

stdin.on('data', function(chunk) {
    data += chunk;
});

stdin.on('end', function() {
    splitToLinesAndProcess(data, processLines)
});