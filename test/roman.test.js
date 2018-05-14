const assert = require('assert');
const kata = require('../src/Roman');


describe('It test number conversion from dec to roman ', function() {
    it('should return X if 10 is passed', function() {
      var result = kata.convertRoman(10);
      assert.equal(result, 'X');
    });

    it('should return XCIV if 94 is passed', function() {
        var result = kata.convertRoman(94);
        assert.equal(result, 'XCIV');
      });

    it('should return CCCLV if 355 is passed', function() {
        var result = kata.convertRoman(355);
        assert.equal(result, 'CCCLV');
      });

      it('should return CCCLVII if 357 is passed', function() {
        var result = kata.convertRoman(357);
        assert.equal(result, 'CCCLVII');
      });

      it('should return IX if 9 is passed', function() {
        var result = kata.convertRoman(9);
        assert.equal(result, 'IX');
      });

      it('should return IV if 4 is passed', function() {
        var result = kata.convertRoman(4);
        assert.equal(result, 'IV');
      });

      it('should return XL if 40 is passed', function() {
        var result = kata.convertRoman(40);
        assert.equal(result, 'XL');
      });

      it('should return XC if 90 is passed', function() {
        var result = kata.convertRoman(90);
        assert.equal(result, 'XC');
      });

      it('should return CCCXC if 390 is passed', function() {
        var result = kata.convertRoman(390);
        assert.equal(result, 'CCCXC');
      });

      it('should return CM if 900 is passed', function() {
        var result = kata.convertRoman(900);
        assert.equal(result, 'CM');
      });

      it('should return CD if 400 is passed', function() {
        var result = kata.convertRoman(400);
        assert.equal(result, 'CD');
      });


      it('should return CMXCIX if 999 is passed', function() {
        var result = kata.convertRoman(999);
        assert.equal(result, 'CMXCIX');
      });
});
