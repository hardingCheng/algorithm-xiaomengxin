![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220214104749.png)

## 解析

### 解法 1 （暴力方法）

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const map = new Map();
  for (const item of nums) {
    map.set(item, (map.get(item) || 0) + 1);
  }
  for (const [key, value] of map.entries()) {
    if (value > nums.length / 2) {
      return key;
    }
  }
};
```

### 解法 2 (排序方法)

因为题目说到数字数量大于一半，所有排序后，返回中间的即可。

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  nums.sort((a, b) => a - b);
  return nums[Math.floor(nums.length / 2)];
};
```

### 解法 3 （摩尔投票法）

因为题目中数组中数字出现的次数大于数组长度的一半。

如果我们把众数（出现次数超过一半的数字）记为 +1，把其他数记为 −1，将它们全部加起来，显然和大于 0。

```md
不同候选人的选票之间，可以一一抵消。
若当前胜利者存在多张选票时，不同的候选人的票，只能抵消一张当前胜利者的票。
若当前双方的选票被抵消为零，下一次抽出的候选人，将作为暂时的胜利者领先。
```

```js
var majorityElement = function (nums) {
  let ans = 0,
    count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (!count) {
      // 票数为0的时候，就换票
      ans = nums[i];
      count++;
    } else count += nums[i] === ans ? 1 : -1;
  }
  return ans;
};
```
