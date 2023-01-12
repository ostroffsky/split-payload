const splitToLinesAndProcess = require('../splitToLinesAndProcess');

test('3 line text 3 processor calls', () => {
    const mockLinesProcessor = jest.fn();

    splitToLinesAndProcess('Line1\nLine2\nLine3', mockLinesProcessor);
    expect(mockLinesProcessor.mock.calls).toHaveLength(1);
    expect(mockLinesProcessor.mock.calls[0][0]).toStrictEqual(['Line1', 'Line2', 'Line3']);
});
