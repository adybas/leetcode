const findMaxConsecutiveOnes = require('./485_max_consecutive_ones');

test('From [1,1,0,1,1,1], the maximum number of consecutive 1s is 3.', () => {
  expect(findMaxConsecutiveOnes([1,1,0,1,1,1])).toStrictEqual(3);
});

test('From [1,0], the maximum number of consecutive 1s is 1.', () => {
    expect(findMaxConsecutiveOnes([1,0])).toStrictEqual(1);
});

test('From [0], the maximum number of consecutive 1s is 0.', () => {
    expect(findMaxConsecutiveOnes([0])).toStrictEqual(0);
});

test('From [0,1,1,0,0,1], the maximum number of consecutive 1s is 2.', () => {
    expect(findMaxConsecutiveOnes([0,1,1,0,0,1])).toStrictEqual(2);
});