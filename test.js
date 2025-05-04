var twoSum0 = function (nums, target) {
  const map = [];
  for (let i = 0; i < nums.length; i++) {
    map.push([i, nums[i]]);
  }
  console.log(map);

  let x = map[0][1];
  let y = target - x;
  let i = 1;
  while (map[i][1] !== y) {}

  for (let k = 0; k < nums.length; k++) {
    let x = map[k][1];

    for (let i = 1; i < nums.length; i++) {
      if (map[i][1] === target - x) {
        let y = map[i][0];
        return [map[k][0], y];
      }
    }
  }
};

var twoSum = function (nums, target) {
  const num_map = new Map();
  console.log(num_map);
  for (let i = 0; i < nums.length; i++) {
    let y = target - nums[i];
    if (num_map.has(y)) {
      return [num_map.get(y), i];
    }
    num_map.set(nums[i], i);
  }
};

console.log(twoSum([3, 2, 4], 6));
// twoSum([3, 2, 4], 6);
