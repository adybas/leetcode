const isPalindrome = require('./125_valid_palindrome');

test(' string "A man, a plan, a canal: Panama" is true', () => {
  expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
});

test(' string "race a car" is false ', () => {
    expect(isPalindrome("race a car")).toBe(false);
});
