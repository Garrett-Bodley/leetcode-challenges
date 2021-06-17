def quick_sort(array)

  return array if array.length < 2

  pivot = (rand() * (array.length - 1)).round()
  # binding.pry
  front = []
  back = []
  array.each_with_index do |el, index|
    next if index == pivot
    el <= array[pivot] ? front.push(el) : back.push(el)
  end

  return [quick_sort(front), array[pivot], quick_sort(back)].flatten

end

