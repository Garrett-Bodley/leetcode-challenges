def quick_sort(array)
  # Return the array if there is one or zero elements
  return array if array.length <= 1 
  # Randomly generate a pivot index and initialize two empty arrays
  pivot = (rand() * (array.length - 1)).round()
  front, back = [[], []]

  # sort elements in relation to pivot element
  array.each_with_index do |el, index|
    # Skip pivot element, do not push it to either array
    next if index == pivot
    el <= array[pivot] ? front.push(el) : back.push(el)
  end
  # Recursively sort subarrays and return a flattened, sorted array
  return [quick_sort(front), array[pivot], quick_sort(back)].flatten

end

