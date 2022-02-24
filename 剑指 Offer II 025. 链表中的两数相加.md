![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220224113016.png)

## 解析

### 方法 1

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let l1Stack = [],
    l2Stack = [];
  let vhead = new ListNode(-1);
  while (l1) {
    l1Stack.push(l1.val);
    l1 = l1.next;
  }
  while (l2) {
    l2Stack.push(l2.val);
    l2 = l2.next;
  }
  let ten = 0;
  while (l2Stack.length || l1Stack.length || ten) {
    let num1 = l1Stack[l1Stack.length - 1] === undefined ? 0 : l1Stack.pop();
    let num2 = l2Stack[l2Stack.length - 1] === undefined ? 0 : l2Stack.pop();
    let sum = num1 + num2 + ten;
    ten = parseInt(sum / 10);
    sum = sum % 10;
    let temp = new ListNode(sum, vhead.next);
    vhead.next = temp;
  }
  return vhead.next;
};
```
