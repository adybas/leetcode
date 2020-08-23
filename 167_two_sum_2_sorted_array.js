// 167. Two Sum II - Input array is sorted Easy
// Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

// The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.

// Note:

// Your returned answers (both index1 and index2) are not zero-based.
// You may assume that each input would have exactly one solution and you may not use the same element twice.
// Example:

// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.

var twoSum = function(numbers, target) {
    let seenHash = {}
    for (let i = 0; i < numbers.length; i++){
        let remainder = target - numbers[i]
        if (seenHash[remainder] !== undefined){
            return [seenHash[remainder] +1, i +1]
        } else {
            seenHash[numbers[i]] = i
        }
    }
};

// Using Two pointers

var twoSum = function(numbers, target) {
    let pointer1 = 0
    let pointer2 = numbers.length - 1

    while(numbers[pointer1] + numbers[pointer2] !== target){
        if (numbers[pointer1] + numbers[pointer2] < target){
            pointer1 += 1
        } else {
            pointer2 -= 1
        }
    }
    return [pointer1 + 1, pointer2 + 1]
}