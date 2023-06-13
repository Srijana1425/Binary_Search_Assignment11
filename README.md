# Binary_Search_Assignment11
**Question 1**<br>
Given a non-negative integer `x`, return *the square root of* `x` *rounded down to the nearest integer*. The returned integer should be **non-negative** as well.
You **must not use** any built-in exponent function or operator.<br>
- For example, do not use `pow(x, 0.5)` in c++ or `x ** 0.5` in python.<br>
**Example 1:**<br>
Input: x = 4<br>
Output: 2<br>
Explanation: The square root of 4 is 2, so we return 2.<br>
**Example 2:**<br>
Input: x = 8<br>
Output: 2<br>
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.<br><br>

*Answer*<br>
**Code** [Link]()<br>
********************************************************************************************************************************
**Question 2**<br>
A peak element is an element that is strictly greater than its neighbors.
Given a **0-indexed** integer array `nums`, find a peak element, and return its index. If the array contains multiple peaks, return the index to **any of the peaks**.<br>
You may imagine that `nums[-1] = nums[n] = -∞`. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.
You must write an algorithm that runs in `O(log n)` time.<br>
**Example 1:**<br>
Input: nums = [1,2,3,1]<br>
Output: 2<br>
Explanation: 3 is a peak element and your function should return the index number 2.<br>
**Example 2:**<br>
Input: nums = [1,2,1,3,5,6,4]<br>
Output: 5<br>
Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.<br><br>

*Answer*<br>
**Code** [Link]()<br>
********************************************************************************************************************************
**Question 3**<br>
Given an array `nums` containing `n` distinct numbers in the range `[0, n]`, return *the only number in the range that is missing from the array.*<br>
**Example 1:**<br>
Input: nums = [3,0,1]<br>
Output: 2<br>
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums<br>
**Example 2:**<br>
Input: nums = [0,1]<br>
Output: 2<br>
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.<br>
**Example 3**<br>
Input: nums = [9,6,4,2,3,5,7,0,1]<br>
Output: 8<br>
Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.<br><br>

*Answer*<br>
**Code** [Link]()<br>
********************************************************************************************************************************
**Question 4**<br>
Given an array of integers `nums` containing `n + 1` integers where each integer is in the range `[1, n]` inclusive.
There is only **one repeated number** in `nums`, return *this repeated number*.<br>
You must solve the problem **without** modifying the array `nums` and uses only constant extra space.<br>
**Example 1:**<br>
Input: nums = [1,3,4,2,2]<br>
Output: 2<br>
**Example 2:**<br>
Input: nums = [3,1,3,4,2]<br>
Output: 3<br><br>

*Answer*<br>
**Code** [Link]()<br>
********************************************************************************************************************************
**Question 5**<br>
Given two integer arrays `nums1` and `nums2`, return *an array of their intersection*. Each element in the result must be **unique** and you may return the result in **any order**.<br>
**Example 1:**<br>
Input: nums1 = [1,2,2,1], nums2 = [2,2]<br>
Output: [2]<br>
**Example 2:**<br>
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]<br>
Output: [9,4]<br>
Explanation: [4,9] is also accepted.<br><br>

*Answer*<br>
**Code** [Link]()<br>
********************************************************************************************************************************
**Question 6**<br>
Suppose an array of length `n` sorted in ascending order is **rotated** between `1` and `n` times. For example, the array `nums = [0,1,2,4,5,6,7]` might become:<br>
- `[4,5,6,7,0,1,2]` if it was rotated `4` times.<br>
- `[0,1,2,4,5,6,7]` if it was rotated `7` times.<br>
Notice that **rotating** an array `[a[0], a[1], a[2], ..., a[n-1]]` 1 time results in the array `[a[n-1], a[0], a[1], a[2], ..., a[n-2]]`.
Given the sorted rotated array `nums` of **unique** elements, return *the minimum element of this array*.
You must write an algorithm that runs in `O(log n) time.`<br>
**Example 1:**
Input: nums = [3,4,5,1,2]<br>
Output: 1<br>
Explanation: The original array was [1,2,3,4,5] rotated 3 times.<br>
**Example 2:**<br>
Input: nums = [4,5,6,7,0,1,2]<br>
Output: 0<br>
Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.<br>
**Example 3:**<br>
Input: nums = [11,13,15,17]<br>
Output: 11<br>
Explanation: The original array was [11,13,15,17] and it was rotated 4 times.<br><br>

*Answer*<br>
**Code** [Link]()<br>
********************************************************************************************************************************
**Question 7**<br>
Given an array of integers `nums` sorted in non-decreasing order, find the starting and ending position of a given `target` value.
If `target` is not found in the array, return `[-1, -1]`.
You must write an algorithm with `O(log n)` runtime complexity.<br>
**Example 1:**
Input: nums = [5,7,7,8,8,10], target = 8<br>
Output: [3,4]<br>
**Example 2:**<br>
Input: nums = [5,7,7,8,8,10], target = 6<br>
Output: [-1,-1]<br>
**Example 3:**<br>
Input: nums = [], target = 0<br>
Output: [-1,-1]<br><br>

*Answer*<br>
**Code** [Link]()<br>
********************************************************************************************************************************
**Question 8**<br>
Given two integer arrays `nums1` and `nums2`, return *an array of their intersection*. Each element in the result must appear as many times as it shows in both arrays and you may return the result in **any order**.<br>
**Example 1:**
Input: nums1 = [1,2,2,1], nums2 = [2,2]<br>
Output: [2,2]<br>
**Example 2:**<br>
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]<br><br>
Output: [4,9]<br>
Explanation: [9,4] is also accepted.<br><br>

*Answer*<br>
**Code** [Link]()<br>
********************************************************************************************************************************

