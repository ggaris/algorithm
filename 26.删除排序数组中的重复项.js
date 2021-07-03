/*
 * @Author: your name
 * @Date: 2020-12-12 15:05:09
 * @LastEditTime: 2020-12-12 16:11:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \oneDayOneTopic\26.删除排序数组中的重复项.js
 */

const removeDuplicates = function(nums) {
  for(let i=0;i<nums.length;i++){
    if(nums[i] == nums[i+1]){
      nums.splice(i,1)
      i--
    }
  }
  return nums
};

nums = 
[1,1,2]
console.log(removeDuplicates(nums))