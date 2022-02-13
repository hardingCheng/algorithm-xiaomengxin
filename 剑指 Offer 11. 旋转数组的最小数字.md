![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220212165715.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220213093001.png)

```md
我们考虑数组中的最后一个元素 xx：在最小值右侧的元素，它们的值一定都小于等于 xx；而在最小值左侧的元素，它们的值一定都大于等于 xx。因此，我们可以根据这一条性质，通过二分查找的方法找出最小值。

在二分查找的每一步中，左边界为 low，右边界为 high，区间的中点为 pivot，最小值就在该区间内。
```

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220213095837.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220213095855.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220213095908.png)

## 解法

### 方法 1

```js
/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
  // 二分法
  let low = 0;
  let high = numbers.length - 1;
  while (low < high) {
    // 获取中间点位置，相对于源数组找的
    let pivot = low + Math.floor((high - low) / 2);
    // 第一种情况
    if (numbers[pivot] < numbers[high]) {
      high = pivot;
      // 第二种情况
    } else if (numbers[pivot] > numbers[high]) {
      low = pivot + 1;
      // 第三种情况
    } else {
      high -= 1;
    }
  }
  return numbers[low];
};
```
