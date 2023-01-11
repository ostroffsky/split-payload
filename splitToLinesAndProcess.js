function splitToLinesAndProcess2(text, linesProcessor) {
    let lines = text.split('\n');
    linesProcessor(lines);
}

module.exports = splitToLinesAndProcess2;