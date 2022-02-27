![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220227214046.png)

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
 * @return {number[]}
 */
var reversePrint = function (head) {
  if (!head) return [];
  let cur = head;
  let res = [];
  while (cur) {
    res.unshift(cur.val);
    cur = cur.next;
  }
  return res;
};
```

### 方法 2 栈

```js
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
  let nodes = [];
  while (head != null) {
    nodes.push(head.val);
    head = head.next;
  }
  // 可以不用下面这一整段，直接  return nodes.reverse();
  let result = [];
  let temp = nodes.pop();
  while (temp != null) {
    result.push(temp);
    temp = nodes.pop();
  }
  return result;
};
```

### 方法 3 递归栈的特性

```js
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head, arr = []) {
  // 利用函数递归栈的特性
  if (head != null) {
    if (head.next != null) {
      reversePrint(head.next, arr);
    }
    arr.push(head.val);
  }
  return arr;
};
```
