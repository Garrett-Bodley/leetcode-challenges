# 167. Two Sum II - Input array is sorted

# Given an array of integers numbers that is already sorted in non-decreasing order, 
# find two numbers such that they add up to a specific target number.

# Return the indices of the two numbers (1-indexed) as an integer array answer of size 2, 
# where 1 <= answer[0] < answer[1] <= numbers.length.

# The tests are generated such that there is exactly one solution. 
# You may not use the same element twice.

# ----------------------------------------------------------------------


# binary search solution

def two_sum(numbers, target)

  numbers.each_with_index do |num, index|
     
      looking_for = target - num
      answer_2 = binary_search(numbers, index + 1, numbers.length - 1, looking_for)
      binding.pry
      if !!answer_2
         return [index + 1, answer_2 + 1] 
      end
  end
end

def binary_search(array, start_idx, end_idx, target)
 
  if end_idx >= start_idx
      
    mid = start_idx + (end_idx - start_idx)/2
    binding.pry
    if array[mid] == target
        return mid
    elsif array[mid] < target
        return binary_search(array, mid + 1, end_idx, target)
    elsif array[mid] > target
        return binary_search(array, start_idx, mid - 1, target)
    end
    
  else
    return nil
  end
end

# Two Pointers solution

def two_sum_two_pointers(array, target)

  i ,j = [0, array.length - 1]

  while array[i] + array[j] != target
    i += 1 if array[i] + array[j] < target
    j -=1 if array[i] + array[j] > target
  end

  return [i + 1, j + 1]

end