const lengthOfLongestSubstring = require('./3_longest_substring_without_repeating_characters');

test('string "au" longest substring is 2', () => {
  expect(lengthOfLongestSubstring('au')).toStrictEqual(2);
});

test('empty string with one space to equal 1', () => {
    expect(lengthOfLongestSubstring(" ")).toStrictEqual(1);
});

test('expect string "abcabcbb" to equal 3', () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toStrictEqual(3);
});

test('expect string "bbbbbb" to equal 1', () => {
    expect(lengthOfLongestSubstring("bbbbbb")).toStrictEqual(1);
});

// lengthOfLongestSubstring("au") // => 2
// lengthOfLongestSubstring(" ") // => 1
// lengthOfLongestSubstring("bbbbbb") // => 1
// lengthOfLongestSubstring("abcabcbb") // => 3