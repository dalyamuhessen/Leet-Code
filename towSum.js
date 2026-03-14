var twoSum = function(nums, target) {
  let pairs = nums.map((v, i) => [v, i]);
  pairs.sort((a, b) => a[0] - b[0]);  
  let left = 0, right = pairs.length - 1;
  while (left < right) {
    let sum = pairs[left][0] + pairs[right][0];
    if (sum === target) return [pairs[left][1], pairs[right][1]];
    if (sum < target) left++;
    else right--;
  }
}
console.log(twoSum([2,7,11,15], 9)); 
console.log(twoSum([3,2,4], 6));     
console.log(twoSum([3,3], 6));      