// example 1
let nums = [3,4,5,1,2]
var minimumelement  = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);

        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return nums[left];
};
console.log(minimumelement (nums))

// **************************************************************************************************

// Example 2
// let nums = [4,5,6,7,0,1,2]
// var minimumelement  = function(nums) {
//     let left = 0;
//     let right = nums.length - 1;

//     while (left < right) {
//         let mid = left + Math.floor((right - left) / 2);

//         if (nums[mid] > nums[right]) {
//             left = mid + 1;
//         } else {
//             right = mid;
//         }
//     }

//     return nums[left];
// };
// console.log(minimumelement (nums))

// // **************************************************************************************************

// // Example 3
// let nums = [11,13,15,17]
// var minimumelement  = function(nums) {
//     let left = 0;
//     let right = nums.length - 1;

//     while (left < right) {
//         let mid = left + Math.floor((right - left) / 2);

//         if (nums[mid] > nums[right]) {
//             left = mid + 1;
//         } else {
//             right = mid;
//         }
//     }

//     return nums[left];
// };
// console.log(minimumelement (nums))