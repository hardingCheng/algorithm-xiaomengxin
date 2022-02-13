![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220213111918.png)

## 解法

### 解法 1

```js
// 根据n确定要打印的最大值，比方说n为2的时候，要打印的最大值是99；n为3时要打印的最大值是999
// 循环从1到最大值，左闭右闭区间，里面的数字加入结果集中
/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function (n) {
  let max = "";
  while (n--) max += "9";
  // 转成int类型方便后面for循环判断
  max = max - 0;
  let res = [];
  for (let i = 1; i <= max; i++) res.push(i);
  return res;
};
```

### 解法 2

```js
// 根据n，调用Math.pow，就能求出最大值
// 循环从1到最大值，左闭右开区间（不得不感慨一下js不用怎么考虑大数的情况真棒）
/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function (n) {
  let maxNum = Math.pow(10, n);
  let res = [];
  for (let i = 1; i < maxNum; i++) res.push(i);
  return res;
};
```

### 解法 3 位运算

### 解法 4 DFS
