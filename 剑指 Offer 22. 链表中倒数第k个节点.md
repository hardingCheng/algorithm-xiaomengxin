![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220223214525.png)

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
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
  if (!head) return null;
  let [fast, slow] = [head, head];
  while (k--) {
    // 快指针先走k步
    fast = fast.next;
  }
  while (fast) {
    // 再一起走，直到快指针走到头
    fast = fast.next;
    slow = slow.next;
  }
  // 此时的慢指针指的就是倒数第k个
  return slow;
};
```
