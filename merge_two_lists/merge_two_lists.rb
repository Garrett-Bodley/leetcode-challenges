require 'pry'

class Node
  attr_accessor :val, :next
  def initialize (val = 0, _next = nil)
    @val = val
    @next = _next
  end
end

def merge_two_lists(l1, l2)
  dummy = Node.new
  current = dummy
  while l1 && l2
    if l1.val <= l2.val
      current = l1
      l1 = l1.next
    else
      current = l2
      l2 = l2.next
    end
    current = current.next
  end

  binding.pry
  current.next = l1 if l1
  current.next = l2 if l2
  return dummy.next
end

# binding.pry

l1 = Node.new(1, Node.new(2, Node.new(4)))
l2 = Node.new(1, Node.new(3, Node.new(4)))

merge_two_lists(l1, l2)