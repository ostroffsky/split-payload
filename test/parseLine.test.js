const parseLine = require('../parseLine');

const EMPTY_INPUT = '{}';
const EXPECTED_EMPTY_OUTPUT = {
    'payload': {},
    'requestId': '',
    'type': '',
    'uri': ''
};

const INPUT = '{"payload":"{\\"a\\":\\"b\\",\\"c\\":\\"d\\"}","requestId":"1673427533944/1ec2199490de7a2f59d7b735f9f10500/13","type":"request","uri":"/cart","timestamp":1673427534134}';
const EXPECTED_OUTPUT = {
    "payload": {
        "a": "b",
        "c": "d"
    },
    'requestId': '1673427533944/1ec2199490de7a2f59d7b735f9f10500/13',
    'type': 'request',
    'uri': '/cart'
};



test('empty object', () => {
    expect(parseLine(EMPTY_INPUT)).toStrictEqual(EXPECTED_EMPTY_OUTPUT);
});

test('normal object', () => {
    expect(parseLine(INPUT)).toStrictEqual(EXPECTED_OUTPUT);
});

test('broken object', () => {
    expect(parseLine("NOT_JSON")).toStrictEqual({});
});