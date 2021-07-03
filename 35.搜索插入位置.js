/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let mark = nums.indexOf(target)
  if(mark != -1){
    return mark
  }else {
    for(let index in nums){
      if(nums[index] > target){
        return index
      } 
    }
    return nums.length
  }
};

let nums = [1,3,5,6]
let target = 2
console.log(searchInsert(nums,target));