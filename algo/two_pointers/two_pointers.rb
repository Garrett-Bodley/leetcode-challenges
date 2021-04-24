
def two_pointers_naive(array, target)

  array.each_with_index do |num_1, index_1|
    array.each_with_index do |num_2, index_2|
      if index_1 == index_2
        next
      elsif array[index_1] + array[index_2] == target
        return [index_1, index_2]
      elsif array[index_1] > array[index_2]
        break
      end
    end
  end

  return false

end

def two_pointers(array, target)
  i = 0
  j = array.length - 1

  while i < j
    if array[i] + array[j] == target
      return [i, j]
    elsif (array[i] + array[j]) < target
      i += 1
    elsif (array[i] + array[j]) > target
      j -= 1
    end
  end

  return false

end

array = [2,7,11,15]
target = 9

puts two_pointers(array, target)