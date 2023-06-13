// Example 1
let nums = [5,7,7,8,8,10], target = 8
const searchRange = (nums, target) => {
    const search = d => {
      let mid, low = 0, high = nums.length - 1, out = -1;
      while(low <= high) {
        mid = (low + high) >> 1;
        if(nums[mid] < target + d) low = mid + 1;
        else high = mid - 1;
        if(nums[mid] == target) out = mid;
      }
      return out;
    }
  
    return [search(0), search(1)];
  }
console.log(searchRange (nums, target))

// **********************************************************************************************

// Example 2
// let nums = [5,7,7,8,8,10], target = 6
// const searchRange = (nums, target) => {
//     const search = d => {
//       let mid, low = 0, high = nums.length - 1, out = -1;
//       while(low <= high) {
//         mid = (low + high) >> 1;
//         if(nums[mid] < target + d) low = mid + 1;
//         else high = mid - 1;
//         if(nums[mid] == target) out = mid;
//       }
//       return out;
//     }
  
//     return [search(0), search(1)];
//   }
// console.log(searchRange (nums, target))

// *****************************************************************************************

// Example 3
// let nums = [], target = 0
// const searchRange = (nums, target) => {
//     const search = d => {
//       let mid, low = 0, high = nums.length - 1, out = -1;
//       while(low <= high) {
//         mid = (low + high) >> 1;
//         if(nums[mid] < target + d) low = mid + 1;
//         else high = mid - 1;
//         if(nums[mid] == target) out = mid;
//       }
//       return out;
//     }
  
//     return [search(0), search(1)];
//   }
// console.log(searchRange (nums, target))