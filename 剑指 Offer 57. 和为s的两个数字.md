![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220218163654.png)

## 解析

### 方法 1

```js
// 双指针
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // 双指针
  let row = 0,
    high = nums.length - 1;
  while (row < high) {
    let temp = nums[row] + nums[high];
    if (temp === target) {
      return [nums[row], nums[high]];
    } else if (temp < target) {
      row++;
    } else {
      high--;
    }
  }
  return [];
};
```
