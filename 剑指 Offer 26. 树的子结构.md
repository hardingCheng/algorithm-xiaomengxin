![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220224193217.png)

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
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
// 我们发现A树中寻找B树的根节点
// 如果我们找到了我们就判断A树中找到的节点的左右子树，是否和B树根节点的左右子树书否相同
// 如何判断是否相同，参照前面两步
var isSubStructure = function (A, B) {
  // 不为空  A整对B整   A左对B整  A右对B整
  return (
    !!A &&
    !!B &&
    (recur(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B))
  );
};
var recur = (A, B) => {
  // B树是null A树中一定包含null
  if (!B) return true;
  if (!A || A.val !== B.val) return false;
  return recur(A.left, B.left) && recur(A.right, B.right);
};
```
