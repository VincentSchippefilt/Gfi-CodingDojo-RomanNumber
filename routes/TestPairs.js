
var converter = require('./ConvertToRomanNumber');

module.exports.AreEqual = function(pair, test)
{
    test.expect(1);
    var expected = pair.expected;

    //act
    var actual = converter.ConvertToRomanNumber(pair.valueUnderTest);

    //assert
    test.strictEqual(actual,expected);

    test.done();



}