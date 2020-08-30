const romanToInt = require('./13_roman_to_integer');

test('MCMXCIV should equal 1994 because M = 1000, CM = 900, XC = 90 and IV = 4', () => {
  expect(romanToInt("MCMXCIV")).toStrictEqual(1994);
});

test('LVIII should equal 58 because L = 50, V= 5, III = 3.', () => {
    expect(romanToInt("LVIII")).toStrictEqual(58);
});

test('III should equal 3 because III = 3.', () => {
    expect(romanToInt("III")).toStrictEqual(3);
});

test('IV should equal 4 because IV = 4 (5 - 1).', () => {
    expect(romanToInt("IV")).toStrictEqual(4);
});