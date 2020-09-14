// 74. Search a 2D Matrix Medium

// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.
// Example 1:

// Input:
// matrix = [
//   [1,   3,  5,  7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50]
// ]
// target = 3
// Output: true
// Example 2:

// Input:
// matrix = [
//   [1,   3,  5,  7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50]
// ]
// target = 13
// Output: false

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    // for (let i = 0; i< matrix.length; i++){
    //     for (let j = 0; j < matrix[0].length; j++){
    //         if (matrix[i][j] === target){
    //             return true
    //         }
    //     }
    // }
    // return false
    //}
/*
Time Complexity: O(n^2) or O(m*n)
=> We have a nested for loop, so time complexity will depend on the size of n we iterate over (if row and column are same size) OR m * n (if row and column are different sizes)

Space Complexity: O(1)
=> We create a hash, which takes up n amount of space;
*/
    
    if (matrix.length === 0) return false
    
    let row = matrix.length
    let column = matrix[0].length
    
    let left = 0
    let right = row*column - 1
    
    while (left <= right){
        //calculate midpt and account for integer overflow
        let midpoint = Math.floor(left + (right-left) / 2)
        
        //calculate row element and round down
        let row_element = Math.floor(midpoint/column)
        
        //calculate col element to locate midpt element
        let midpoint_element = matrix[row_element][midpoint%column]
        
        //do binary search
        if(target === midpoint_element){
            return true
        } else if (target < midpoint_element){
            right = midpoint - 1
        } else if (target > midpoint_element){
            left = midpoint + 1
        }
    }
    return false
};

/*
Time Complexity: O(log(n))
=> Since we conducted a binary search, time complexity it log(n)

Space Complexity: O(1)
=> We create a hash, which takes up n amount of space;
*/



    
