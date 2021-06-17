let findMedianSortedArrays = function(nums1, nums2) {

  const merged = quickSort([...nums1, ...nums2])
  
  return merged.length % 2 === 0 ? 
    (merged[Math.floor(merged.length/2 -1)] + merged[Math.floor(merged.length/2)])/2
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
