![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220224192458.png)

## 解析

```md
题目说了是一个二叉搜索树，所以中序遍历是一个递增序列
但题目要求求第 k 大节点的值
我们当然不能把所有节点都遍历完，知道总数 sum 后减去 k，再中序遍历第 sum-k 小的数字，这样太麻烦了
反过来想，我们先遍历右节点，再遍历当前节点，再遍历左节点，是不是就是一个递减序号

二叉搜索树 = 中序遍历 从小到达
反向中序遍历 从大到小 减到 K 就可以了
```

### 方法 1

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
  if (!root) return null;
  let target = 0;
  var dfs = function (root) {
    if (!root) return null;
    dfs(root.right);
    if (!--k) return (target = root.val);
    dfs(root.left);
  };
  dfs(root);
  return target;
};
```
