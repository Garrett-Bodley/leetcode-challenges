
const binarySearchRecursive = (arr, start, finish, target) => {

  if (finish >= start){
     
    let mid = start + (finish - start) / 2
    let middle_element = arr[mid]

    if(middle_element === target){

      return mid

    }else if(middle_element > target){

      return binarySearch(arr, start, mid - 1, target)

    }else{
      
      return binarySearch(arr, mid + 1, finish, target)

    }
  }else{
    return -1
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