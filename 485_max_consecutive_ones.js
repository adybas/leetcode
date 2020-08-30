// 485. Max Consecutive Ones, Easy

// Given a binary array, find the maximum number of consecutive 1s in this array.

// Example 1:
// Input: [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s.
//     The maximum number of consecutive 1s is 3.
// Note:

// The input array will only contain 0 and 1.
// The length of input array is a positive integer and will not exceed 10,000

var findMaxConsecutiveOnes = function(nums) {
    
    let count = 0
    let consecutiveOnes = 0
    let i = 0

    while (i < nums.length){
        if (nums[i] === 1){
            count += 1
        } else {
            count = 0
        }
        consecutiveOnes = Math.max(count, consecutiveOnes)
        i++
    }
    
    return consecutiveOnes
};

module.exports = findMaxConsecutiveOnes