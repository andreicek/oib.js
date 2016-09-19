/* eslint-disable no-undef,no-undefined */

test('should exspose validate function', () => {
  const oib = require('./');

  expect(oib.validate).not.toBe(undefined);
});

test('should exspose iso7064 function', () => {
  const oib = require('./');

  expect(oib.iso7064).not.toBe(undefined);
});

test('should accept number', () => {
  const oib = require('./');
  const status = oib.validate(24076340234);

  expect(status).toBe(true);
});

test('should accept string', () => {
  const oib = require('./');
  const status = oib.validate('79423753532');

  expect(status).toBe(true);
});

test('should return false on a short OIB', () => {
  const oib = require('./');
  const status = oib.validate(840907312);

  expect(status).toBe(false);
});

test('should return false on unexpected chars', () => {
  const oib = require('./');
  const status = oib.validate('test');

  expect(status).toBe(false);
});

test('should support modules', () => {
  const {validate, iso7064} = require('./');

  expect(validate).not.toBe(undefined);
  expect(iso7064).not.toBe(undefined);
});

/* eslint-enable */
