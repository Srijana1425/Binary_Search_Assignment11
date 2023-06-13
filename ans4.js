// Example 1
let nums = [1,3,4,2,2]
var findDuplicate = function(nums) {
    var freq = {} 
    
    for (var n of nums) {
        if (n in freq) {return n}
        else {freq[n] = 1}
    }
};
console.log(findDuplicate (nums))