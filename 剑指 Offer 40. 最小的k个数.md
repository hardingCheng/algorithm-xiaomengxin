![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220214112307.png)

## 解析

### 解法 1 (排序法)

```js
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
  return arr.sort((a, b) => a - b).slice(0, k);
  // 使用高级排序（代码用的是快排），时间复杂度是O(NlogN)O(NlogN)，空间复杂度是O(logN)O(logN)。
};
```

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220214113025.png)

### 解法 2 (快速排序)

```md
解法 1 中使用了快速排序，但其实并需要对全部元素进行排序，题目只需要前 k 个元素。

回顾快速排序中的 partition 操作，可以将元素 arr[0]放入排序后的正确位置，并且返回这个位置 index。利用 partition 的特点，算法流程如下：

- 如果 index = k，说明第 k 个元素已经放入正确位置，返回前 k 个元素
- 如果 k < index，前 k 个元素在[left, index - 1]之间，缩小查找范围，继续查找
- 如果 index < k，前 k 个元素在[index + 1, right] 之间，缩小查找范围，继续查找

每次从[start, end]范围内的数组中随机选择一个标杆元素(代码里取得是第一个元素), 然后把数组中所有小于标杆的放在数组左边，所有大于标杆的元素放在数组右边，然后判断标杆元素的位置是否等于目标位置。如果目标位置小于当前位置，则继续在左边查找，如果目标位置大于当前位置，则继续在右边查找。这样每次迭代都会缩小查找的范围。最理想的情况下时间复杂度是 O(logN)
```

```js
var getLeastNumbers = function (arr, k) {
  let len = arr.length;
  if (!len || !k) return [];
  let start = 0;
  let end = len - 1;
  // 寻找一次标杆元素的位置
  let index = quickSort(arr, start, end);
  // 如果标杆元素的位置不等于 K
  while (index !== k - 1) {
    if (index > k - 1) {
      // 如果上一次查找，标杆元素位置大于目标位置
      end = index - 1;
      index = quickSort(arr, start, end);
    } else {
      // 如果上一次查找，标杆元素位置小于目标位置
      start = index + 1;
      index = quickSort(arr, start, end);
    }
  }
  return arr.slice(0, index + 1);
};

function quickSort(arr, left, right) {
  // 首次标杆选择第一个
  let pivot = arr[left];
  while (left < right) {
    // 从右边找到比标杆小的值，和左侧交换
    while (left < right && arr[right] >= pivot) right--;
    arr[left] = arr[right];
    // 从左边找一个比标杆大的值，和右侧交换
    while (left < right && arr[left] < pivot) left++;
    arr[right] = arr[left];
  }
  // 标杆数值放置
  arr[left] = pivot;
  return left;
}
```

### 解法 3 （堆,不是很会）

```js
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
// var getLeastNumbers = function(arr, k) {
//     return arr.sort((a, b) => a - b).slice(0, k);
// };
var getLeastNumbers = function (arr, k) {
  let len = arr.length;
  let res = [];
  if (k === 0) return [];
  if (k === len) return arr;
  buildHeap(arr);
  for (let i = 1; i <= k; i++) {
    res.push(arr[0]);
    swap(arr, 0, len - i);
    heapAdjust(arr, 0, len - i);
  }
  return res;
};
var buildHeap = function (arr) {
  let len = arr.length;
  // 从最后一个元素的父节点开始实现最小堆，类似删除操作中将最后一个元素放在堆顶进行调整。
  for (let i = Math.floor(len / 2); i >= 0; i--) {
    heapAdjust(arr, i, len);
  }
};
var swap = function (arr, i, child) {
  if (i === child) return;
  let temp = arr[i];
  arr[i] = arr[child];
  arr[child] = temp;
};
var heapAdjust = function (arr, i, len) {
  let child = i * 2 + 1;
  // 看是否有孩子
  while (child < len) {
    if (child + 1 < len && arr[child] > arr[child + 1]) {
      child = child + 1;
    }
    if (arr[i] > arr[child]) {
      swap(arr, i, child);
      i = child;
      child = child * 2 + 1;
    } else {
      break;
    }
  }
};
```
