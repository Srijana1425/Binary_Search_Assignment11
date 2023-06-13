// Example 1
let nums = [3,0,1]
var missingNumber = function(nums) {
    let n = nums.length + 1;
       let total = (n * (n-1)) / 2;
       
       for (let num of nums) {
           total -= num;
       }
       
       return total;
};
console.log(missingNumber(nums))

// ***************************************************************************************

//Example 2
// let nums = [0,1]
// var missingNumber = function(nums) {
//     let n = nums.length + 1;
//        let total = (n * (n-1)) / 2;
       
//        for (let num of nums) {
//            total -= num;
//        }
       
//        return total;
// };
// console.log(missingNumber(nums))

// ***************************************************************************************

// Example 3
// let nums = [9,6,4,2,3,5,7,0,1]
// var missingNumber = function(nums) {
//     let n = nums.length + 1;
//        let total = (n * (n-1)) / 2;
       
//        for (let num of nums) {
//            total -= num;
//        }
       
//        return total;
// };
// console.log(missingNumber(nums))