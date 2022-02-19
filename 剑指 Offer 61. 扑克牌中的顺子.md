![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220219102020.png)

```md
除大小王之外，顺子中的最大值和最小值之间的差值不会超过 5（准确点来说是差值最大为 4，比方说：[1,2,3,4,5]）

众所周知顺子中不能出现重复的牌，如果出现重复的牌肯定不是顺子
```

## 解析

### 方法 1 (set / map)

```js
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function (nums) {
  let set = new Set();
  let max = 0,
    min = 14;
  for (let num of nums) {
    // 跳过大小王;
    if (num === 0) continue;
    max = Math.max(num, max);
    min = Math.min(num, min);
    // 若有重复，提前返回 false
    if (set.has(num)) return false;
    else set.add(num);
  }
  // 最大牌 - 最小牌 < 5 则可构成顺子
  return max - min < 5;
};
```

### 方法 2 (排序)

```js
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function (nums) {
  let kingsCount = 0;
  nums.sort((a, b) => a - b);
  let numsCount = 5;
  for (let i = 0; i < numsCount - 1; i++) {
    if (nums[i] == 0) kingsCount++;
    else if (nums[i] == nums[i + 1]) return false;
  }
  // kingsCount这时候已经指向0后面的数字了
  return nums[4] - nums[kingsCount] < 5;
};
```
