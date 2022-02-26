![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220226133011.png)

## 解析

### 方法 1

```js
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  let dp = [];
  let p2 = 0,
    p3 = 0,
    p5 = 0;
  dp[0] = 1;
  for (let i = 1; i < n; i++) {
    dp[i] = Math.min(dp[p2] * 2, Math.min(dp[p3] * 3, dp[p5] * 5));
    if (dp[i] === dp[p2] * 2) p2++;
    if (dp[i] === dp[p3] * 3) p3++;
    if (dp[i] === dp[p5] * 5) p5++;
  }
  return dp[n - 1];
};
```
