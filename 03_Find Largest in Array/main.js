let nums = [4, 8, 2, 10, 6];

// function largestNumber(nums){
//     return Math.max(...nums);
// }

function largestNumber(nums){
    let largeNum = -Infinity;

    for(let i = 0;i<nums.length; i++){
        if(nums[i] > largeNum){
            largeNum = nums[i];
        }
    }

    return largeNum;
}

console.log(largestNumber(nums))