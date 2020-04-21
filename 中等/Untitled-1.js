/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
  let count = 2;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i+1]) {
      if(nums[i - 1] === undefined || (nums[i - 1] != undefined && nums[i + 1] > nums[i - 1])) {
        nums[i] = nums[i+1];
      } else {
        nums[i+1] = nums[i];
      }
      count--;
    }
    if (!count) break;
  }
  return !!count;
};