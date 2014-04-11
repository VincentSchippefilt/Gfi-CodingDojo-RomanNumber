"use strict";

var converter = require('../routes/ConvertToRomanNumber');
var testhelper = require('../routes/TestPairs');


module.exports.WhenWeInput1_ThenWeGetI = function (test) {
    testhelper.AreEqual({expected : "I", valueUnderTest: 1}, test)

};

module.exports.WhenWeInput2_ThenWeGetII = function (test) {
    testhelper.AreEqual({expected : "II", valueUnderTest: 2}, test)
};

module.exports.WhenWeInput3_ThenWeGetIII = function (test) {
    testhelper.AreEqual({expected : "III", valueUnderTest: 3}, test)
};

module.exports.WhenWeInput5_ThenWeGetV = function (test) {
    testhelper.AreEqual({expected : "V", valueUnderTest: 5}, test)
};

module.exports.WhenWeInput10_ThenWeGetX = function (test) {
    testhelper.AreEqual({expected : "X", valueUnderTest: 10}, test)
};

module.exports.WhenWeInput4_ThenWeGetIV = function (test) {
    testhelper.AreEqual({expected : "IV", valueUnderTest: 4}, test)
};

module.exports.WhenWeInput100_ThenWeGetC = function (test) {
    testhelper.AreEqual({expected : "C", valueUnderTest: 100}, test)
};

module.exports.WhenWeInput500_ThenWeGetD = function (test) {
    testhelper.AreEqual({expected : "D", valueUnderTest: 500}, test)
};

module.exports.WhenWeInput50_ThenWeGetL = function (test) {
    testhelper.AreEqual({expected : "L", valueUnderTest: 50}, test)
};

module.exports.WhenWeInput1000_ThenWeGetM = function (test) {
    testhelper.AreEqual({expected : "M", valueUnderTest: 1000}, test)
};

module.exports.WhenWeInput20_ThenWeGetXXWhichIsTwoTimes10 = function (test) {
    testhelper.AreEqual({expected : "XX", valueUnderTest: 20}, test)
};

module.exports.WhenWeInput3000_ThenWeGetMMM = function (test) {
    testhelper.AreEqual({expected : "MMM", valueUnderTest: 3000}, test)
};

module.exports.WhenWeInput11_ThenWeGetXI = function (test) {
    testhelper.AreEqual({expected : "XI", valueUnderTest: 11}, test)
};

module.exports.WhenWeInput125_ThenWeGetCXXV = function (test) {
    testhelper.AreEqual({expected : "CXXV", valueUnderTest: 125}, test)
};

module.exports.WhenWeInput949_ThenWeGetCMXLIX = function (test) {
    testhelper.AreEqual({expected : "CMXLIX", valueUnderTest: 949}, test)
};

module.exports.WhenWeInput9_ThenWeGetIX = function (test) {
    testhelper.AreEqual({expected : "IX", valueUnderTest: 9}, test)
};

module.exports.WhenWeInput49_ThenWeGetXLIX = function (test) {
    testhelper.AreEqual({expected : "XLIX", valueUnderTest: 49}, test)
};

module.exports.WhenWeInput2949_ThenWeGetMMCMXLIX = function (test) {
    testhelper.AreEqual({expected : "MMCMXLIX", valueUnderTest: 2949}, test)
};
