// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

// 给定 

// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]
var twoSum = function(nums, target) {
  this.targets = []
  nums.forEach((item,index)=>{
    poor = target - item
    if (nums.includes(poor) && index  != nums.indexOf(poor)){
      this.targets = [nums.indexOf(poor),index]
    }
  })
  return this.targets
};



let nums = [2,1,9,4,4,56,90,3]
let target = 8
console.log(twoSum(nums,target));