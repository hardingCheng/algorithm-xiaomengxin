var findNumberIn2DArray = function (matrix, target) {
  if (!matrix.length) return false;
  let x = matrix.length - 1,
    y = 0;
  while (x > 0 && y < matrix[0].length) {
    if(matrix[x][y] > target) {
      x--
    }else if(matrix[x][y] < target) {
      y++
    }else {
      return true
    }
  }
  return false;
};
var findNumberIn2DArray = function(matrix, target) {
  if(!matrix.length) return false;
  let x = matrix.length - 1, y = 0;
  while(x >= 0 && y < matrix[0].length){
      if(matrix[x][y] === target){
          return true;
      }else if(matrix[x][y] > target){
          x--;
      }else{
          y++;
      }
  }
  return false;