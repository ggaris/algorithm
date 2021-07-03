/*
 * @Author: your name
 * @Date: 2020-12-12 16:16:33
 * @LastEditTime: 2020-12-12 16:24:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \oneDayOneTopic\27.移除元素.js
 */
var removeElement = function(nums, val) {
  for(i=0;i<nums.length;i++){
    if(nums[i] == val) {
      nums.splice(i,1)
      i--
    }
  }
  return nums.length
};

console.log(removeElement([3,2,2,3],3));