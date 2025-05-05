/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  const uniqueNumbers = new Map();
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (val !== nums[i]) {
      uniqueNumbers.set(j, nums[i]);
      j++;
    }
  }

  let values = uniqueNumbers.values();

  let k = 0;
  for (const item of values) {
    nums[k] = item;
    k++;
  }

  for (let i = k; i < nums.length; i++) {
    nums[i] = undefined;
  }
  return k;
};

var removeElementTwoPointer = function (nums, val) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[j] = nums[i];
      j++;
    }
  }
  return j;
};

removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
