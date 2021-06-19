def quick_sort(array)
  # Return the array if there is one or zero elements
  return array if array.length <= 1 
  # Randomly generate a pivot index and initialize two empty arrays
  pivot = (rand() * (array.length - 1)).round()
  # partition array at pivot point
  front, back = partition(array, pivot)

  # Recursively sort subarrays and return a flattened, sorted array
  return [quick_sort(front), array[pivot], quick_sort(back)].flatten

end

# partition helper method
def partition(array, pivot)
  front, back = [[], []]

  array.each_with_index do |el, index|
    # Skip the pivot point when partitioning
    next if index == pivot
    el <= array[pivot] ? front.push(el) : back.push(el)
  end

  return [front, back]
end

