![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220224214703.png)

## 解析

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
 * @return {number[][]}
 */
// 思路：锯齿形遍历和层序遍历都是我们这道题的一个变形
// dfs 深度优先搜索，先递归下去再回溯上来
var levelOrder = function (root) {
  let res = [];
  // k 主要能找到相应层数的地方
  getLevelOrder(root, 0, res);
  return res;
};
var getLevelOrder = (root, k, res) => {
  if (!root) return null;
  // k 是遍历的层数，用来标记是当前第几层
  if (k === res.length) res.push([]);
  res[k].push(root.val);
  getLevelOrder(root.left, k + 1, res);
  getLevelOrder(root.right, k + 1, res);
};
```
