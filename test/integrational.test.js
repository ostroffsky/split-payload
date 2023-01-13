// noinspection JSFileReferences

const execSync = require('child_process').execSync;
const fs = require('fs');

test('File contents are correct', () => {
    execSync('cat test/input/test-input.txt | node index.js', { encoding: 'utf-8' });

    let expectedRequest = require('./output/request_1673425553944_1ec2199490deabcdd7b735f9f10500_11.json');
    let expectedResponse = require('./output/response_1673425553944_1ec2199490deabcdd7b735f9f10500_11.json');

    let request = require('../request_1673425553944_1ec2199490deabcdd7b735f9f10500_11.json');
    let response = require('../response_1673425553944_1ec2199490deabcdd7b735f9f10500_11.json');

    expect(request).not.toBeNull();
    expect(response).not.toBeNull();
    expect(request).toEqual(expectedRequest);
    expect(response).toEqual(expectedResponse);

    fs.rmSync('request_1673425553944_1ec2199490deabcdd7b735f9f10500_11.json', { recursive:true });
    fs.rmSync('response_1673425553944_1ec2199490deabcdd7b735f9f10500_11.json', { recursive:true });
});