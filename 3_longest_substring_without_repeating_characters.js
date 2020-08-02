// Given a string, find the length of the longest substring without repeating characters.

// Example 1:

// Input: "abcabcbb"
// Output: 3 
// Explanation: The answer is "abc", with the length of 3. 
// Example 2:

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3. 
//              Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

var lengthOfLongestSubstring = function(s) {
    let count = 0
    
    let i = 0
    let j = 0
    let n = s.length
    let set = new Set
    
    while (i < n && j < n){
        if(!set.has(s.charAt(j))){
            set.add(s.charAt(j))
            j++
            count = Math.max(count, j - i)
        } else {
            set.delete(s.charAt(i))
            i++
        }
    }
    return count
};

lengthOfLongestSubstring("au") // => 2
lengthOfLongestSubstring(" ") // => 1
lengthOfLongestSubstring("bbbbbb") // => 1
lengthOfLongestSubstring("abcabcbb") // => 3