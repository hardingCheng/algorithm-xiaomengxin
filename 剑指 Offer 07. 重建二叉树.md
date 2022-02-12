![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220212144930.png)

## 解法

### 方法 1 递归 + 分治

```md
首先我们要明白前序遍历和中序遍历的节点遍历顺序。
前序遍历：根->左->右
中序遍历：左->根->右

结合题目的数组我们可以得到一个信息：
preorder 得到的根节点，
根据根节点在中序遍历的位置，在 inorder 中的它的位置，左侧是左子树，右侧是右子树

而在 inorder 获取的索引可以帮助我们划分 preorder 数组，来得到左右子树，就能获得左右子树根节点
于是我们可以通过划分数组的方式递归得到叶子节点，
然后通过一步步的回溯把它们组装起来，就是一棵完整的树。
```

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
// 前序遍历：根 左 右
// 中序遍历：左 根 右
var buildTree = function (preorder, inorder) {
  if (preorder.length === 0) return null;
  // 根节点
  let cur = new TreeNode(preorder[0]);
  // 先分割节点
  let index = inorder.indexOf(preorder[0]);
  // 左子树
  cur.left = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index));
  // 右子树
  cur.right = buildTree(preorder.slice(index + 1), inorder.slice(index + 1));
  return cur;
};
```
