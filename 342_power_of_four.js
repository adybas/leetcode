// Given an integer (signed 32 bits), write a function to check whether it is a power of 4.

// Example 1:

// Input: 16
// Output: true
// Example 2:

// Input: 5
// Output: false
// Follow up: Could you solve it without loops/recursion?

var isPowerOfFour = function(num) {
    let multiplier = 1
    
    while (multiplier < num){
        multiplier *= 4
    }
    
    return multiplier === num
};

//multiply number by 4 until you reach either the num(true) or a number less than it(false)