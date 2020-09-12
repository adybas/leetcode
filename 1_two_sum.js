// 1. Two Sum-- Easy
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

// nums = [3,2,4], target = 6
//return [1,2] bc 2 + 4 = 6

var twoSum = function(nums, target) {
    let seenHash = {}
    for (let i = 0; i < nums.length; i++){
        let remainder = target - nums[i]
        if (seenHash[remainder] !== undefined){
            return [seenHash[remainder], i]
        } else {
            seenHash[nums[i]] = i
        }
    }
}

module.exports = twoSum;

/*
Time Complexity: O(n)
=> We have one loop, so time complexity will depend on the size of n we iterate over
=> Our hash lookup and insert are both O(1), but we drop that from our analysis 
bc we drop non dominant variables due to the insignificance of them as our input increases for n

Space Complexity: O(n)
=> We create a hash, which takes up n amount of space;
*/