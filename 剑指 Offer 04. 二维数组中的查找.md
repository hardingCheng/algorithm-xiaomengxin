![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220212110937.png)

## 解析

### 方法 2 暴力求解

```js
var findNumberIn2DArray = function (matrix, target) {
  if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
    return false;
  }
  let n = matrix.length;
  let m = matrix[0].length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === target) {
        return true;
      }
    }
  }
  return false;
};
```

### 方法 2 【坐标轴法】二维数组中的查找

```md
某列的某个数字，该数之上的数字，都比其小；
某行的某个数字，该数右侧的数字，都比其大；

以二维数组左下角为原点，建立直角坐标轴。
若当前数字大于了查找数，查找往上移一位。
若当前数字小于了查找数，查找往右移一位。
```

```js
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
  if (!matrix.length) return false;
  let x = matrix.length - 1,
    y = 0;
  while (x >= 0 && y < matrix[0].length) {
    if (matrix[x][y] > target) {
      x--;
    } else if (matrix[x][y] < target) {
      y++;
    } else {
      return true;
    }
  }
  return false;
};
```
