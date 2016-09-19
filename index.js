var oib = (function() {
  'use strict'; // eslint-disable-line strict

  function __validateISO7064(oibArray) {
    var controlDigit = oibArray.pop();
    var value = oibArray.reduce(function(prev, next) {
      var check = prev + next;
      check %= 10;

      if (check === 0) {
        check = 10;
      }

      check *= 2;
      check %= 11;
      
      return check;
    }, 10);

    var checksum = (11 - value === 10) ? 0 : (11 - value);

    return checksum === controlDigit;
  }

  function __stringToNumberArray(string) {
    return Array.prototype.slice.call(string).map(function(digit) {
      return parseInt(digit, 10);
    });
  }

  function __validate(oibNumber) {
    var number = oibNumber.toString();
    var oibDigits = __stringToNumberArray(number);

    var lengthVal = oibDigits.length === 11;
    var intVal = parseInt(number, 10);
    var isoVal = __validateISO7064(oibDigits);

    return lengthVal && Boolean(intVal) && isoVal;
  }

  return {
    validate: __validate,
    iso7064: function(oibNumber) {
      var oibDigits = __stringToNumberArray(oibNumber);

      return __validateISO7064(oibDigits);
    }
  };
})();

if (typeof module === 'object' && module.exports) {
  module.exports = oib;
}
