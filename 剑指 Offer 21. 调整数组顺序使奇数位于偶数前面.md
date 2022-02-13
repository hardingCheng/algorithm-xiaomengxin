![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220213120109.png)

## 解法

### 解法 1

```js
// 快慢指针  双指针
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
  let low = 0;
  let high = nums.length - 1;
  let temp;
  while (low < high) {
    console.log(low, high);
    if (nums[low] % 2 === 0 && nums[high] % 2 === 1) {
      temp = nums[low];
      nums[low] = nums[high];
      nums[high] = temp;
      low++;
      high--;
    }
    if (nums[low] % 2 === 1) low++;
    if (nums[high] % 2 === 0) high--;
  }
  return nums;
};
```
