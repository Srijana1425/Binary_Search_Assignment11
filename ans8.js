// Example 1
let nums1 = [1,2,2,1], nums2 = [2,2]
var intersect = function(nums1, nums2) {
	// sort the arrays
    nums1.sort((a,b) => a-b), nums2.sort((a,b) => a-b);
	
    let i = 0,
        j = 0,
        result = [];
    
    while(i<nums1.length && j<nums2.length) {
        if(nums1[i] < nums2[j]){
            i++;
        } else if(nums1[i] > nums2[j]) {
            j++;
        } else {
            result.push(nums1[i]);
            i++;
            j++;
        }
    }
    return result;
};
console.log(intersect(nums1, nums2))

// ********************************************************************************
// Example 2
// let nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// var intersect = function(nums1, nums2) {
// 	// sort the arrays
//     nums1.sort((a,b) => a-b), nums2.sort((a,b) => a-b);
	
//     let i = 0,
//         j = 0,
//         result = [];
    
//     while(i<nums1.length && j<nums2.length) {
//         if(nums1[i] < nums2[j]){
//             i++;
//         } else if(nums1[i] > nums2[j]) {
//             j++;
//         } else {
//             result.push(nums1[i]);
//             i++;
//             j++;
//         }
//     }
//     return result;
// };
// console.log(intersect(nums1, nums2))