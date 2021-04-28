# Given a string s, find the length of the longest substring without repeating characters.
require 'set'

def length_of_longest_substring(s)
   
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

puts length_of_longest_substring("dvdf")