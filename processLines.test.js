const processLines = require('./processLines');

const FIRST_LINE_INPUT = '{"payload":"{\\"a\\":\\"b\\",\\"c\\":\\"d\\"}","requestId":"1673427533944/1ec2199490de7a2f59d7b735f9f10500/13","type":"request","uri":"/cart","timestamp":1673427534134}';
const SECOND_LINE_INPUT = '{"payload":"{\\"a\\":\\"b\\",\\"c\\":\\"d\\"}","requestId":"1673427533944/1ec2199490de7a2f59d7b735f9f10500/12","type":"response","uri":"/cart","timestamp":1673427534134}';

jest.mock('./parseLine', () => jest.fn().mockResolvedValue());
jest.mock('./writePayload', () => jest.fn().mockResolvedValue());

const parseLine = require('./parseLine');
const writePayload = require('./writePayload');

beforeEach(() => {
    jest.clearAllMocks();
});

test('No calls if empty lines', () => {
    processLines([]);

    expect(parseLine).toBeCalledTimes(0);
    expect(writePayload).toBeCalledTimes(0);
});

test('1 line 1 call', () => {
    processLines([FIRST_LINE_INPUT]);

    expect(parseLine).toBeCalledTimes(1);
    expect(writePayload).toBeCalledTimes(1);
});

test('2 lines 2 calls', () => {
    processLines([FIRST_LINE_INPUT, SECOND_LINE_INPUT]);

    expect(parseLine).toBeCalledTimes(2);
    expect(writePayload).toBeCalledTimes(2);
});
