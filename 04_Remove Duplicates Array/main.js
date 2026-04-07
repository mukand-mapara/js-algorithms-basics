// Remove Duplicates from Array
// 👉 Write a function that removes duplicate values from an array.

let nums = [1, 2, 2, 2, 3, 3, 4];

// function removeDuplicate(nums){
//     return [...new Set(nums)];
// }

function removeDuplicate(nums) {
  // step 1 create empty array
  let ans = [];
  // step 2 looping the all the items in array
  for (let i = 0; i < nums.length; i++) {
    let existNumber = false;
    // step 3 check if the array of i === ans[j] assign the True and braek;
    for (let j = 0; j < ans.length; j++) {
      // step 4 otherwise add the item in the array
      if (nums[i] === ans[j]) {
        existNumber = true;
        break;
      }
    }

    if (!existNumber) {
      ans[ans.length] = nums[i];
    }
  }

  // step 5 return the array

  return ans;
}

console.log(removeDuplicate(nums));
