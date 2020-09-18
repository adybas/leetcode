// 20. Valid Parentheses Easy

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
// Example 4:

// Input: s = "([)]"
// Output: false
// Example 5:

// Input: s = "{[]}"
// Output: true
 

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

/*
 * @param {string} s
 * @return {boolean}
 */

var isValid = function(s) {
    //If the string is not even, it cannot hold matching pairs of parentheses
    if (s.length % 2 !== 0) return false

    //create a hashmap to hold key, values pairs of the parentheses
    const parenthesesPairs = {
        "}" : "{",
        ")" : "(",
        "]" : "["
    }

    //create an array to act as a stack
    const stack = []

    //for each parenthese of the string, grab the last stack array element, and also check to see if the current iteration is closing element by looking it up in the hash
    for (let parenthese of s){
        const currentParenthese = parenthese
        const lastAddedParenthese = stack[stack.length - 1]
        const matchedPair = parenthesesPairs[currentParenthese]

        //if element is closing parenthases, check to see if the opening of that parenthese is the last element pushed to the stack (and thus valid)
        if(matchedPair !== undefined){
            if(matchedPair === lastAddedParenthese){
                stack.pop()
            } else {
                return false
            }

        // if element is an opening parenthese, add it to the stack
        } else {
            stack.push(currentParenthese)
        }
    }
    
    //check to see if the stack has any leftover parentheses (and thus not valid)
    return stack.length === 0
};

/*
Time Complexity: O(n)
Space Complexity: O(n)
*/