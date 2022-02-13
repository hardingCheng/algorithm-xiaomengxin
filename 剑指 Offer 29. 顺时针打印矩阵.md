![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220213165730.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220213165832.png)

```md
while 循环只遍历”环“，不成环了就遍历了。

选择一次迭代遍历一个“圈”，然后 4 条边的两端同时收缩，一层层向内处理，按顺时针依次遍历：上、右、下、左层。
不再形成“环”了就结束遍历，剩下一行或一列，然后单独判断即可。

上边界 top : 0
下边界 bottom : matrix.length - 1
左边界 left : 0
右边界 right : matrix[0].length - 1

矩阵不一定是方阵。
top < bottom && left < right 是循环的条件。
结束循环时，分 3 种情况：
top == bottom && left < right —— 剩一行。
top < bottom && left == right —— 剩一列。
top == bottom && left == right —— 剩一项（也是一行/列）。

处理剩下的单行或单列
因为是按顺时针推入结果数组的，所以：
剩下的一行，从左至右 依次推入结果数组。
剩下的一列，从上至下 依次推入结果数组。
```

```js
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let res = [];
  if (matrix.length == 0) return [];
  // 循环找边界
  let top = 0;
  let left = 0;
  let bottom = matrix.length - 1;
  let right = matrix[0].length - 1;
  while (top < bottom && left < right) {
    for (let i = left; i < right; i++) res.push(matrix[top][i]); // 向右走  注意这里是<right 而不是<=right
    for (let i = top; i < bottom; i++) res.push(matrix[i][right]); // 向下走
    for (let i = right; i > left; i--) res.push(matrix[bottom][i]); // 向左走
    for (let i = bottom; i > top; i--) res.push(matrix[i][left]); // 向上走
    right--;
    top++;
    bottom--;
    left++;
  }
  if (top === bottom && left < right) {
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i]); // 向上走
    }
  } else if (left === right && top < bottom) {
    for (let i = top; i <= bottom; i++) {
      res.push(matrix[i][left]); // 向上走
    }
  } else if (top == bottom && left == right) {
    //还剩一个
    res.push(matrix[left][top]);
  }
  return res;
};
```

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220213170517.png)

```md
循环的条件是 top <= bottom && left <= right 。
每遍历完一条边，下一条边遍历的起点被“挤占”，所以要更新相应的边界。
因为要在循环过程中更新边界，所以可能出现：循环的条件在中途不再满足，即 top > bottom || left > right ，其中一对边界彼此交错了。
这代表此时所有项都遍历完了，如果不马上 break，就会重复遍历，造成元素重复地进入结果数组。

每遍历完一条边，更新完相应的边界后，都加一句 if (top > bottom || left > right) break
但其实发现，遍历结束要么发生在遍历完“上边”，要么发生在遍历完“右边”，只需在这两步操作之后加 if (top > bottom || left > right) break 即可，不用每一条后面都加。
```

```js
const spiralOrder = (matrix) => {
  if (matrix.length == 0) return [];
  const res = [];

  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i]);
    }
    top++;
    for (let i = top; i <= bottom; i++) {
      res.push(matrix[i][right]);
    }
    right--;

    if (top > bottom || left > right) break;

    for (let i = right; i >= left; i--) {
      res.push(matrix[bottom][i]);
    }
    bottom--;
    for (let i = bottom; i >= top; i--) {
      res.push(matrix[i][left]);
    }
    left++;
  }
  return res;
};
```
