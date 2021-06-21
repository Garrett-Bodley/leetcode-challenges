// 167. Two Sum II - Input array is sorted

// Given an array of integers numbers that is already sorted in non-decreasing order, 
// find two numbers such that they add up to a specific target number.

// Return the indices of the two numbers (1-indexed) as an integer array answer of size 2, 
// where 1 <= answer[0] < answer[1] <= numbers.length.

// The tests are generated such that there is exactly one solution. 
// You may not use the same element twice.

// ----------------------------------------------------------------------

// Brute force solution
// --------------------

// Very computationally expensive. O(n ^ 2) time complexity.

let twoSumBruteForce = (array, target) => {
  // Iterate through each element in the array
  for(let i = 0; i < array.length; i++){

    // Iterate through each remaining element in the array
    for(let j = i + 1; j < array.length; j++){
      // Return 1-indexed indices of the elements that meet the requirements
      if(array[i] + array[j] === target){
        return [++i, ++j]
      }
    }
  }
}

// Two Pointers Solution
// ---------------------

// This method takes advantage of the fact that our initial array is sorted in ascending value

let twoSumTwoPointers = (array, target) => {
  // Initializing our two pointers, one at the beginning of the array and one at the very end
  let [i, j] = [0 , array.length - 1]

  while(array[i] + array[j] !== target){
    if(array[i] + array[j] < target) i++;
    if(array[i] + array[j] > target) j--;
    if(i >= j) return false;
  }

  return [++i, ++j]
}