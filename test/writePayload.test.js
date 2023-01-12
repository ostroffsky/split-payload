const writePayload = require('../writePayload');

const INPUT = {
    'payload': {
        'a': 'b',
        'c': 'd'
    },
    'requestId': '1673427533944/1ec2199490de7a2f59d7b735f9f10500/141',
    'type': 'request'
};

jest.mock('fs', () => ({
    writeFileSync: jest.fn().mockResolvedValue()
}));

const fs = require('fs');

beforeEach(() => {
    jest.clearAllMocks();
});

test('Writes file with correct filename and content', () => {
    writePayload(INPUT);
    expect(fs.writeFileSync).toHaveBeenCalledTimes(1);
    expect(fs.writeFileSync)
        .toBeCalledWith('request_1673427533944_1ec2199490de7a2f59d7b735f9f10500_141.json',
            JSON.stringify(INPUT.payload, null, 2));
});

test('Doesn\'t write file with correct filename and content', () => {
    writePayload({});
    expect(fs.writeFileSync).toHaveBeenCalledTimes(0);
});

