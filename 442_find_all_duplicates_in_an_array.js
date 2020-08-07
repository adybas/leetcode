// Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

// Find all the elements that appear twice in this array.

// Could you do it without extra space and in O(n) runtime?

// Example:
// Input:
// [4,3,2,7,8,2,3,1]

// Output:
// [2,3]

function getKeyByValue(object, value) {   
    return Object.keys(object).filter(key => object[key] === value)
}

var findDuplicates = function(nums) {
    let seenHash = {}
    for (let i = 0; i < nums.length; i++){
        if (seenHash[nums[i]] != null){
            seenHash[nums[i]] += 1
        } else {
            seenHash[nums[i]] = 1
        }
    }
    return getKeyByValue(seenHash, 2)  
};

// make hash to keep the num of inputs
//output any key in hash where the value is 2