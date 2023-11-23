function getMaxSubSum(arr) {
    let maxSum = 0;
    let currentSum = 0;
  
    for (let num of arr) {
      currentSum = Math.max(num, currentSum + num); // new subarray if current sum is negative
      maxSum = Math.max(maxSum, currentSum); // new subarray if current sum is greater
    }
  
    return maxSum;
  }
 
  console.log(getMaxSubSum([-1, 2, 3, -9]))
  console.log(getMaxSubSum([2, -1, 2, 3, -9]) )
  console.log(getMaxSubSum([-1, 2, 3, -9, 11]))
  console.log(getMaxSubSum([-2, -1, 1, 2]) )
  console.log(getMaxSubSum([100, -9, 2, -3, 5]))
  console.log(getMaxSubSum([1, 2, 3]))