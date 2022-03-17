// 前提是数组为有序数组，同时题目还强调数组中无重复元素，因为一旦有重复元素，使用二分查找法返回的元素下标可能不是唯一的，这些都是使用二分法的前提条件。

/**
 * 第一种写法
 * 第一种写法，我们定义 target 是在一个在左闭右闭的区间里，也就是[left, right] （这个很重要非常重要）。
 */
function binarySearch1(nums, target) {
  let left = 0;
  let right = nums.length - 1; // 定义target在左闭右闭的区间里，[left, right]
  while (left <= right) {
    // 当left==right，区间[left, right]依然有效，所以用 <=
    let mid = (left + right) >> 1;
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1; // target 在右区间，所以[middle + 1, right]
    } else if (nums[mid] > target) {
      right = mid - 1; // target 在左区间，所以[left, middle - 1]
    }
  }
  return -1;
}
/**
 * 第二种写法
 * 如果说定义 target 是在一个在左闭右开的区间里，也就是[left, right) ，那么二分法的边界处理方式则截然不同。
 * while (left < right)，这里使用 < ,因为left == right在区间[left, right)是没有意义的
 */
function binarySearch1(nums, target) {
  let left = 0;
  let right = nums.length; // 定义target在左闭右开的区间里，即：[left, right)
  while (left < right) {
    // 因为left == right的时候，在[left, right)是无效的空间，所以使用 <
    let mid = (left + right) >> 1;
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1; // target 在右区间，在[middle + 1, right)中
    } else if (nums[mid] > target) {
      right = mid; // target 在左区间，在[left, middle)中
    }
  }
  return -1;
}
