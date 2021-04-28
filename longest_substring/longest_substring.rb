# Given a string s, find the length of the longest substring without repeating characters.
require 'set'

# solution using set
def length_of_longest_substring_using_set(s)
   
  set = Set.new
  
  l, r, result = 0, 0, 0

  while r < s.length

    while set.include?(s[r])
      set.delete(s[l])
      l += 1
    end
    set.add(s[r])
    result = r - l + 1 if r - l + 1 > result
    r += 1
  end

  result

end

# clever solution grabbed from LeetCode comments
# signficantly faster than solution using set

def length_of_longest_substring(s)
  stack = []
  highest_count = 0
  s.each_char do |c|
    unless index = stack.index(c)
      stack.push(c)
    else
      stack.push(c)
      # stack = stack[(index+1)..-1]
      # you could do the above line, but its much slower. faster to `shift` from array
      (index + 1).times {stack.shift}
    end
    highest_count = stack.length if stack.length > highest_count
  end
  highest_count
end

puts length_of_longest_substring("dvdf")