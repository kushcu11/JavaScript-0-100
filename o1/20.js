//two sum
//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//You may assume that each input would have exactly one solution, and you may not use the same element twice.
//You can return the answer in any order.
class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] === target) {
                    return [i, j];
                }
            }
        }
        return null;
    }
}
const testCases = [
  // Basic example
  { nums: [2, 7, 11, 15], target: 9, expected: [0, 1] },

  // Duplicates that still work
  { nums: [3, 3], target: 6, expected: [0, 1] },

  // Negative numbers
  { nums: [-1, -2, -3, -4, -5], target: -8, expected: [2, 4] },

  // Multiple valid pairs (returning any valid one is fine)
  { nums: [1, 4, 5, 6], target: 10, expected: [1, 3] },

  // No solution (expected null or [])
  { nums: [1, 2, 3], target: 100, expected: null },

  // Single element (impossible)
  { nums: [5], target: 5, expected: null },

  // Empty array
  { nums: [], target: 0, expected: null }
];

export default testCases;
// Test cases for the twoSum function
function testTwoSum() {
    const sol = new Solution();

    testCases.forEach((test, index) => {
        const result = sol.twoSum(test.nums, test.target);
        const passed = JSON.stringify(result) === JSON.stringify(test.expected);
        console.log(
            `Test ${index + 1}:`,
            passed ? "✅ Passed" : `❌ Failed (got ${result}, expected ${test.expected})`
        );
    });
}
testTwoSum();