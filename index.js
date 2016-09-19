var oib = (function() {
  'use strict'; // eslint-disable-line strict

  function __validateISO7064(oibArray) {
    var controlDigit = oibArray[oibArray.length - 1];
    var num = 10;

    oibArray.pop();
    oibArray.forEach(function(prev) {
      num += prev;
      num %= 10;

      if (num === 0) {
        num = 10;
      }

      num *= 2;
      num %= 11;
      return num;
    });

    var checkDigit = 11 - num === 10 ? 0 : 11 - num;

    return checkDigit === controlDigit;
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
