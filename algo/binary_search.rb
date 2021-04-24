def binary_search_recursive(array, start_idx, end_idx, target)

  if end_idx >= start_idx

    mid = start_idx + (end_idx - start_idx)/2

    if array[mid] == target

      return mid

    elsif array[mid] > target

      return binary_search_recursive(array, start_idx, mid - 1, target)

    elsif array[mid] < target

      return binary_search_recursive(array, mid + 1, end_idx, target)

    end
  else
    return nil
  end

end

def binary_search_iterative(array, start_idx, end_idx, target)
  
  while end_idx >= start_idx
    mid = start_idx + (end_idx - start_idx)/2

    if array[mid] == target
      return  mid
    elsif array[mid] < target
      start_idx = mid + 1
    else
      end_idx = mid - 1
    end
  end

  puts nil
  
end


arr = [ 2, 3, 4, 10, 40 ]
x = 10

puts binary_search_iterative(arr, 0, arr.length - 1, x)