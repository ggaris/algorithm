/*
 * @Author: your name
 * @Date: 2020-12-12 16:28:05
 * @LastEditTime: 2020-12-12 16:47:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \oneDayOneTopic\867. 转置矩阵.js
 * 
 * 给定一个矩阵 A， 返回 A 的转置矩阵。
 * 矩阵的转置是指将矩阵的主对角线翻转，交换矩阵的行索引与列索引。
 * 输入：[[1,2,3],
 *       [4,5,6],
 *       [7,8,9]]
 * 输出：[[1,4,7],
 *       [2,5,8],
 *       [3,6,9]]
 */

var transpose = function(A) {
  let newArr = new Array(A[0].length)
  for(let i =0;i<newArr.length;i++){
    newArr[i] = new Array(A.length)
  }
  for(let i = 0;i<A.length;i++){
    for(let z = 0;z<A[i].length;z++) {
      newArr[z][i] = A[i][z]
    }
  }
  return newArr
};
let AS = [[1,2,3],[4,5,6]]
console.log(transpose(AS));


