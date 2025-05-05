/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], nums[i]);
    }
  }
  let ans = new Array(nums.length);

  let uniqueKeys = map.keys();
  let index = 0;
  for (const key of uniqueKeys) {
    nums[index] = key;
    index++;
  }

  for (let i = index; i < nums.length; i++) {
    nums[i] = undefined;
  }
  return index;
};

var removeDuplicatesTP = function (nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[j] !== nums[i] || nums[j] === undefined) {
      nums[j] = nums[i];
      j++;
    }
  }
  return j;
};

console.log(removeDuplicates([1, 1, 2]));
