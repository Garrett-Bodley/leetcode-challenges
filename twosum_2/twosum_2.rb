## binary search solution

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

numbers = [5,25,75]
target = 100

puts two_sum(numbers, target)