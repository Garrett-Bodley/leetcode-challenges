const quickSort = (array) => {

  if(array.length < 2) return array;

  let pivotIndex = Math.floor(Math.random() * array.length)
  let [front, back] = [];

  array.forEach((el, index) => {
    if(index === pivotIndex) return;
    el <= array[pivotIndex] ? front.push(el) : back.push(el)
  })

  return [...quickSort(front), array[pivotIndex], ...quickSort(back)]

}
