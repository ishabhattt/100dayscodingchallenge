// my solution

// Input: nums = [2,7,11,15], target = 26
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
function numSum(arr, tar) {
  let sum = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      let count = arr[i] + arr[j];
      if (i !== j && count === tar) {
        return [i, j];
      }
    }
  }
}
console.log(numSum([2, 7, 11, 15], 26));

//but time complexity is  O(n2)

// -------------------------------------------------------******************************-------------------------------------------
//chatgpt solution to get O(n)

function numSum(arr, tar) {
  const map = {}; // Hash table to store elements and their indices

  // Store elements and their indices in the hash table
  for (let i = 0; i < arr.length; i++) {
    const complement = tar - arr[i];
    if (map[complement] !== undefined) {
      return [map[complement], i];
    }
    map[arr[i]] = i;
  }

  // If no solution found
  return [];
}

console.log(numSum([2, 7, 11, 15], 26)); // Output: [2, 3]
