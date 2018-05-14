const assert = require('assert');
const kata = require('../src/Decimal');

describe('It test number conversion from roman to dec ', function() {

  testCases = [
    { testCase: 'X' , expected: 10 },
    { testCase: 'XL', expected: 40 },
    { testCase: 'XC', expected: 90 },
    { testCase: 'CMXCIX', expected: 999 },
    { testCase: 'CCC', expected: 300 },
    { testCase: 'MMM', expected: 3000 },
  ];

  const test = ({ testCase, expected }) => {
    it(`should return ${expected} if ${testCase} is passed` , function() {
      var result = kata.convertDecimal(testCase);
      assert.equal(result, expected);
    });
  };

  testCases.map(test);

});
