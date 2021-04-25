
const binarySearchRecursive = (arr, start_index, max_index, target) => {

  if (max_index >= start_index){
     
    let mid = start_index + (max_index - start_index) / 2
    let middle_element = arr[mid]

    if(middle_element === target){

      return mid

    }else if(middle_element > target){

      return binarySearch(arr, start_index, mid - 1, target)

    }else{
      
      return binarySearch(arr, mid + 1, max_index, target)

    }
  }else{
    return false
  }
  
}

const binarySearchIterative = (array, target) => {

  let i = 0;
  let j = array.length-1;

  while(j >= i){
    let mid = i + (j - i)/2
    
    if(array[mid] === target){

      return mid

    }else if(array[mid] > target){

      j = mid - 1

    }else if(array[mid] < target){

      i = mid + 1

    }
  }

  return -1

}