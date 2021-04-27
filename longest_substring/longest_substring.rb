# Given a string s, find the length of the longest substring without repeating characters.

require 'pry'

def length_of_longest_substring(s)
    
  sub = []
  l = 0

  s.each_char do |char|

    if char == s[-1] && !sub.include?(char)
      sub << char
    end

    if sub.include?(char)
      l = sub.length if sub.length > l
      sub = [char]
    else
      sub << char
    end
  end

  return l 

end

# Input: s = "abcabcbb"
# Output: 3
#  pwwkew

puts length_of_longest_substring("pwwkew")


#          .  .
# p  w  w  k  e  w

# k = 1
# l = 2 