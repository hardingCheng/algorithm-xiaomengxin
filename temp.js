// 找到最大数的下标
function getMaxIndex(nums) {
  let max = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[max]) {
      max = i;
    }
  }
  return max;
}
// 反转前k个元素
var reverse = function (arr, k) {
  if (k < 1) {
    return;
  }
  let i = 0,
    j = k;
  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }
};
var pancakeSort = function (arr) {
  let ans = [],
    max;
  while (arr.length > 0) {
    max = getMaxIndex(arr);
    // ans 存储反转的长度
    if (max === arr.length - 1) {
      continue;,
    }
    max > 0 && ans.push(max + 1);
    reverse(arr, max);
    reverse(arr, arr.length - 1);
    ans.push(arr.length);
    arr.pop();
  }
  return ans;
};
