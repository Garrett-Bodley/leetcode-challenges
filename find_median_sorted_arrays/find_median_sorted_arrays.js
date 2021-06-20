let findMedianSortedArrays = (nums1, nums2) => {

  const merged = quickSort([...nums1, ...nums2])
  
  return merged.length % 2 === 0 ? 
    ( merged[merged.length/2 - 1] + merged[merged.length/2] )/2
    : merged[Math.floor(merged.length/2)]
    
};

let quickSort = (array) => {

  if(array.length < 2) return array;

  let pivotIndex = Math.floor(Math.random() * array.length)
  let [front, back] = [[], []];

  array.forEach((el, index) => {
    if(index === pivotIndex) return;
    el <= array[pivotIndex] ? front.push(el) : back.push(el)
  })

  return [...quickSort(front), array[pivotIndex], ...quickSort(back)]

}

// Faster solution using two pointers
let findMedianSortedArraysTwoPointers = (nums1, nums2) => {

  let i = 0;
  let j = 0;
  let merged = []

  while(i < nums1.length && j < nums2.length){
    if(nums1[i] < nums2[j]){
      merged.push(nums1[i])
      i++
    }else{
      merged.push(nums2[j])
      j++
    }
  }

  while(i < nums1.length){
    merged.push(nums1[i])
    i++
  }

  while(j < nums2.length){
    merged.push(nums2[j])
    j++
  }

  if(merged.length % 2 === 0){
    return ( merged[( merged.length/2 ) - 1] + merged[merged.length/2] )/2
  }else{
    return merged[Math.floor(merged.length/2)]
  }
}
