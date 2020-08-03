// Design a HashSet without using any built-in hash table libraries.

// To be specific, your design should include these functions:

// add(value): Insert a value into the HashSet. 
// contains(value) : Return whether the value exists in the HashSet or not.
// remove(value): Remove a value in the HashSet. If the value does not exist in the HashSet, do nothing.

// Example:

// MyHashSet hashSet = new MyHashSet();
// hashSet.add(1);         
// hashSet.add(2);         
// hashSet.contains(1);    // returns true
// hashSet.contains(3);    // returns false (not found)
// hashSet.add(2);          
// hashSet.contains(2);    // returns true
// hashSet.remove(2);          
// hashSet.contains(2);    // returns false (already removed)

// Note:

// All values will be in the range of [0, 1000000].
// The number of operations will be in the range of [1, 10000].
// Please do not use the built-in HashSet library.

/**
 * Initialize your data structure here.
 */
var MyHashSet = function() {
    this.set = new Set
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    this.set.add(key)
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    this.set.delete(key)
};

/**
 * Returns true if this set contains the specified element 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    return this.set.has(key)
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */



// Better solution that is not mine!!


// HashSet internal data structure is based on buckets and linked lists. 
// I think using buckets and linked lists to design hashSet is what interviewers
// want to see.

// /**
//  * Initialize your data structure here.
//  */
// var LinkedNode = function(value) {
//     this.val = value;
//     this.next = null;
// }

// var MyHashSet = function() {
//     this.buckets = [];
//     this.bucketsLen = 1000;
// };

// /** 
//  * @param {number} key
//  * @return {void}
//  */
// MyHashSet.prototype.add = function(key) {
//     let hashCode = key % this.bucketsLen;
//     if(!this.buckets[hashCode]) {
//         this.buckets[hashCode] = new LinkedNode(0);
//         let head = this.buckets[hashCode];
//         head.next = new LinkedNode(key);
//         return;
//     } else {
//         let head = this.buckets[hashCode];
//         let point = head;
//         head = head.next;
        
//         while(head !== null) {
//             if(head.val === key) {
//                 return;
//             } else {
//                 point = head;
//                 head = head.next;
//             }
                
//         }
//         point.next = new LinkedNode(key);
//         return;
//     }
// };

// /** 
//  * @param {number} key
//  * @return {void}
//  */
// MyHashSet.prototype.remove = function(key) {
//     let hashCode = key % this.bucketsLen;
//     let head = this.buckets[hashCode];
//     if(!head) {
//         return;
//     } else {
//         let point = head;
//         let cur = head.next;
//         while(cur !== null) {
//             if(cur.val === key) {
//                 point.next = cur.next;
//                 return;
//             } 
//             point = cur;
//             cur = cur.next;
//         }
//     }
//     return;
// };

// /**
//  * Returns true if this set contains the specified element 
//  * @param {number} key
//  * @return {boolean}
//  */
// MyHashSet.prototype.contains = function(key) {
//     let hashCode = key % this.bucketsLen;
//     let head = this.buckets[hashCode];
    
//     if(!head) {
//         return false;
//     } else {
//         head = head.next;
//         while(head !== null) {
//             if(head.val === key) {
//                 return true;
//             }
//             head = head.next;
//         }
//         return false;
//     }
// };

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */