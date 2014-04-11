/**
 * Created by Vincent.Schippefilt on 10/04/2014.
 */
"use strict";

module.exports.succeedingTest = function (test) {
    //arrange
    console.log("something is happening");

    //act

    //assert


    test.done();
};
/*
module.exports.failsBecauseItIsMissingAnAssertion = function (test) {
    //arrange
    console.log("something is happening");
    test.expect(1);

    //act

    //assert


    test.done();
};*/

module.exports.succeedThanksToSimpleEqualityAndAutomaticCasting = function (test) {
    //arrange
    var expectedValue = 3;
    test.expect(1);

    //act
    var actualValue = "3";

    //assert
    test.equals(actualValue, expectedValue, '3 and "3" are actually the same in javascript (3 == "3") ');

    test.done();
};
/*
module.exports.failsBecauseOfStrictEquality = function (test) {
    //arrange
    var expectedValue = 3;
    test.expect(1);

    //act
    var actualValue = "3";

    //assert
    test.strictEqual(actualValue, expectedValue,'the operator === will also make sure that the type of things are the same so 3 === "3" is false' );

    test.done();
};*/
