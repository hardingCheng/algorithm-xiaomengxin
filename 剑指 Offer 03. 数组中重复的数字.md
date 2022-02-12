![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220212095218.png)

## 解析

### 解法 1 哈希表

遍历数组中的数字，检查是否出现过，如果出现过，那么返回此数字。
由于使用了哈希表，所以空间复杂度是 O(N)。需要遍历一次，时间复杂度是 O(1)。

```js
// 遍历数组中的数字，检查是否出现过，如果出现过，那么返回此数字
var findRepeatNumber = function (nums) {
  let set = new Set();
  for (let num of nums) {
    if (set.has(num)) {
      return num;
    } else {
      set.add(num);
    }
  }
};
```

### 解法 2 原地交换

从题目描述可以知道，所有数字都在 0 ～ n-1 的范围内。因此不需要额外开辟空间，每次遍历时，检查当前元素是否放在了正确位置上（例如元素 i 应该放在下标为 i 的位置上）。如果放在了正确位置上，那么继续循环。否则：

- 下标为 num 的元素 === num，说明当前元素 num 是重复的，直接返回
- 下标为 num 的元素 !== num，交换当前元素和下标为 num 的元素，将当前元素放入到正确位置上

```js
var findRepeatNumber = function (nums) {
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    let num = 0;
    while ((num = nums[i]) !== i) {
      if (num === nums[num]) {
        return num;
      } else {
        [nums[i], nums[num]] = [nums[num], nums[i]];
      }
    }
  }
};
```
