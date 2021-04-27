# Given a string s, find the length of the longest substring without repeating characters.

require 'pry'

def length_of_longest_substring(s)
    
  i, j, k, l = 0, 1, 0, 0

  while j <= s.length - 1

    k += 1
    if s[i] == s[j]

      l = k unless k <= l
      k = 0

    end

    i += 1
    j += 1

  end


  return l
end

# Input: s = "abcabcbb"
# Output: 3

puts length_of_longest_substring("pwwkew")


         .  .
p  w  w  k  e  w

k = 1
l = 2 