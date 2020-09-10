const twoSum = require('./1_two_sum');

test('From [2, 7, 11, 15], nums[0] + nums[1] = 2 + 7 = 9', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
});

test('From [3,2,4], nums[1] + nums[2] = 2 + 4 = 6', () => {
    expect(twoSum([3,2,4], 6)).toStrictEqual([1, 2]);
});

test('From [0,4,3,0], nums[0] + nums[3] = 0 + 0 = 0', () => {
  expect(twoSum([0,4,3,0], 0)).toStrictEqual([0, 3]);
});

test('From [1,-2,-3, 5], nums[1] + nums[3] = -2 + 5 = 3', () => {
  expect(twoSum([1,-2,-3, 5], 3)).toStrictEqual([1, 3]);
});