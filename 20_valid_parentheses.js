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
    if (s.length % 2 !== 0) return false

    const parenthesesPairs = {
        "}" : "{",
        ")" : "(",
        "]" : "["
    }

    const stack = []

    for (let parenthese of s){
        const currentParenthese = parenthese
        const lastAddedParenthese = stack[stack.length - 1]
        const matchedPair = parenthesesPairs[currentParenthese]

        if(matchedPair !== undefined){
            if(matchedPair === lastAddedParenthese){
                stack.pop()
            } else {
                return false
            }
        } else {
            stack.push(currentParenthese)
        }
    }

    return stack.length === 0
};