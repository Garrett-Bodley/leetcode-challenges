/** A non-ideal implementation of QuickSort. QuickSort should sort in place,
 * not utilizing any extra data structures. Though not ideal this implementation
 * is syntactically clear and helps demonstrate how QuickSort functions.
 */

const quickSortNaive = (array) => {

  if(array.length < 2) return array;

  let pivotIndex = Math.floor(Math.random() * (array.length - 1))
  let [front, back] = [];

  array.forEach((el, index) => {
    if(index === pivotIndex) return;
    el <= array[pivotIndex] ? front.push(el) : back.push(el)
  })

  return [...quickSort(front), array[pivotIndex], ...quickSort(back)]

}


const quickSortNaiveVerbose = (array) => {

/* If the array only has one element it is already sorted. Return the array as is.
The same is true for an empty array. 
*/
  if(array.length < 2) return array;
  
/* The pivot is selected at random from the array. There are big brained math 
reasons why you should do this. What's important is that selecting a pivot 
at random prevents a worst case runtime of O(n ^ 2)
*/
  let pivotIndex = Math.floor(Math.random() * (array.length - 1));
    
  // Initialize the two subarrays.
  let [front, back] = [];
  
  // Partition the parent array
  array.forEach((el, index) => {
    // Skip the pivot index
    if(index === pivotIndex) return;
    // Sort the elements in relation to the pivot element.
    el <= array[pivotIndex] ? front.push(el) : back.push(el)
  })
    
  // Recursively sort the subarrays, and return the sorted array
  return [...quickSort(front), array[pivotIndex], ...quickSort(back)]
}

const partitionLamuto = (array, low, high) => {
  // Lamuto's scheme traditionally uses the last element in the array as the pivot.
  let pivot = array[high];
  // i points to the first element NOT determined to be less than the pivot
  let i = low;
  let temp;

  // Iterate through the elements from low to high
  for(let j = low; j < high; j++){
    // If the array[j] is less than the pivot, swap array[i] and array[j]
    if(array[j] < pivot){
      temp = array[j];
      array[j] = array[i];
      array[i] = temp;

      /* After swapping, increment i so that it points to the first element NOT 
      determined to be less than the pivot element. 
      */
      i++;
    }
  }

  /* After iterating through the provided range, swap the pivot with the 
  pivot with array[i]. The pivot is now in its final sorted position.
  We return i, which denotes the boundary between the two partitions—or 
  subarrays. Those partitions are then recursively sorted using the same method.
  */

  temp = array[i];
  array[i] = array[high];
  array[high] = temp;

  return i
}

const partitionHoare = (array, low, high) => {
  //  For this example, the the last element in the array will function as our pivot
  let pivot = array[high]
  let i = low - 1;
  let j = high;

  // Loop the following procedure until i is greater than or equal to j
  while(i < j){
    /** Increment i (the left pointer) until an element larger than 
     * the pivot is found.
    */
    do{
      i++
    }while(array[i] <= pivot)
    /** Decrement j (the right pointer) until an element less than
     * the pivot is found.
     */
    do{
      j--
    }while(array[j] > pivot)
    /** As long as i and j have not crossed over one another, i points
     * to an element LARGER than the pivot and j points to an element SMALLER
     * thank the pivot. Therefore, once we swap those elements for each other
     * we know they are on the correct side of where the pivot should be located
     */
    if(i < j){
      swap(array, i, j)
    }
  }
  /** This code reached only when i and j have crossed.
   *  
   * When i and j have crossed, we know that all elements to the left of i 
   * are less than the pivot (meaning array[i] MUST be greater than or equal 
   * to the pivot). Since we're moving our pivot to the end of the array
   * before partitioning, we swap the i with the pivot (array[high]). The pivot
   * is now in its final sorted position.
   * 
   * We return the partitioning index, which we can use to recursively sort the
   * remaining partitions on either side of the pivot.
   */
  swap(array, i, high)
  return i
}

const quickSortHoare = (array, low, high) => {
  if(low < hi){
    // Choosing a random element within the provided range to be the pivot.
    let pivot = Math.floor(Math.random()*(high - low)) + low
    // Move the pivot to the end of the array.
    swap(array, high, pivot)
    /**  Call our partitioning function, which returns the partition index or pi.
     * pi is equal to the final sorted index of our selected pivot. We then recursively
     * sort the partitions on either side of 
     */
    let pi = partitionHoare(array, low, high)
    quickSortHoare(array, low, pi)
    quickSortHoare(array, p + 1, high)
  }
}

const swap = (array, i, j) => {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}