/**
 * @param {number[]} height
 * @return {number}
 * @max {number}
 */
var maxArea = function(height) {
  let left = 0,right = height.length - 1,max = 0
  while (left < right){
    max = Math.max(max,(right - left) * (height[left] > height[right] ? height[right--] : height[left++]))
  }
  return max
};

let height = [1,8,6,2,5,4,8,3,7]
console.log(maxArea(height));