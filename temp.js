/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function (nums) {
  let set = new Set();
  let max = 0,
    min = 14;
  for (let num of nums) {
    // 跳过大小王;
    if (num === 0) continue;
    max = Math.max(num, max);
    min = Math.min(num, min);
    // 若有重复，提前返回 false
    if (set.has(num)) return false;
    else set.add(num);
  }
  // 最大牌 - 最小牌 < 5 则可构成顺子
  return max - min < 5;
};
