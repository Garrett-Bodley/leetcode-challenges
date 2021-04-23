require 'pry'

class ListNode
  attr_accessor :val, :next
  def initialize(val = 0, _next = nil)
      @val = val
      @next = _next
  end
end

def add_two_numbers(l1, l2)
  first_num = numerate(l1)
  second_num = numerate(l2)
  output = []

  sum = first_num + second_num
  sum.to_s.each_char{|c| output << c.to_i}
  output.reverse!

end

def numerate(node)
  numerated = 0
  index = 0

  do
    numerated += (node.val * (10**index))
    index += 1
    node = node.next
    break if node.next == nil
  end

  # numerated = 0
  # list.each_with_index {|num, index| numerated += num * place_value(index)}
  # numerated
end

def place_value(index)
  10**index
end

first = [2,4,3]
second = [5,6,4]

# iterate through the first array and build out an int
# iterate through 2nd array and build an int
# 

add_two_numbers(l1, l2)