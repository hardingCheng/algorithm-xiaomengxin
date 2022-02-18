![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220218170140.png)

## 解析

### 方法 1 （暴力求解）

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let count = 0;
  nums.forEach((x) => {
    if (x === target) count++;
  });
  return count;
};
```

### 方法 2 (二分法)

```js
const search = (nums, target) => {
  // 定义上下限、找到的标志flag
  let [low, high, flag] = [0, nums.length - 1, null];

  while (low <= high) {
    // 因为>>移位运算比除法操作性能好很多，另外就是考虑到大数溢出的情况s
    const mid = low + ((high - low) >> 1);
    const midNum = nums[mid];
    if (midNum > target) {
      high = mid - 1;
    } else if (midNum < target) {
      low = mid + 1;
    } else {
      // 如果找到了，将mid赋值给flag，存的是索引
      flag = mid;
      // 找到一个，直接退出循环
      break;
    }
  }
  // while结束后，判断是否找到，没找到直接返回0
  if (flag === null) return 0;

  // 从flag开始，向两边扩散
  low = high = flag;
  while (nums[low - 1] === target) low--;
  while (nums[high + 1] === target) high++;

  // 返回计数
  return high - low + 1;
};
```
