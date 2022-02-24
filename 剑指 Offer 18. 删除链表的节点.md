![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220224134737.png)

## 解析

### 方法 1

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
  let vhead = new ListNode(-1, head);
  let p = vhead;
  while (p && p.next) {
    // 如果下一个值等于val，则删除下一个值
    if (p.next.val === val) p.next = p.next.next;
    p = p.next;
  }
  return vhead.next;
};
```
