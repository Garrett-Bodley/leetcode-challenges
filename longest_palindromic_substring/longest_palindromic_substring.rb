require 'pry'

def longest_palindromic_substring_dynamic(s)

  table = []
  start = 0
  max = 1
  # Creating a table data structure made of nested arrays.
  s.length.times do |i|
    row = []
    s.length.times do |j|
      row << 0
    end
    table << row
  end

  # Each single character is a palindrome, marking the corresponding coordinates as true
  s.length.times do |i|
    table[i][i] = true
  end

  # Checking for two letter palindromes

  s.length.times do |i|
    if s[i] === s[i + 1]
      table[i][i + 1] = true
      start = i
      max = 2
    end
  end


  #check for 3 letter or greater palindromes

  # k is the one indexed length of the substring
  k = 2

  while k < s.length
  
    # iterate through the string
    i = 0
    # subtract one from k to make it a zero indexed length
    while i < s.length - k
      # j is zero index of the last character in the current substring 
      j = i + k
      if s[i] === s[j] &&  table[i + 1][j - 1] == true
        table[i][j] = true
        if k > max
          max = k + 1
          start = i
        end
      end
      i += 1
    end
    k += 1
  end
  return s[start...start + max]

end

string = "aaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeeeffffffffffgggggggggghhhhhhhhhhiiiiiiiiiijjjjjjjjjjkkkkkkkkkkllllllllllmmmmmmmmmmnnnnnnnnnnooooooooooppppppppppqqqqqqqqqqrrrrrrrrrrssssssssssttttttttttuuuuuuuuuuvvvvvvvvvvwwwwwwwwwwxxxxxxxxxxyyyyyyyyyyzzzzzzzzzzyyyyyyyyyyxxxxxxxxxxwwwwwwwwwwvvvvvvvvvvuuuuuuuuuuttttttttttssssssssssrrrrrrrrrrqqqqqqqqqqppppppppppoooooooooonnnnnnnnnnmmmmmmmmmmllllllllllkkkkkkkkkkjjjjjjjjjjiiiiiiiiiihhhhhhhhhhggggggggggffffffffffeeeeeeeeeeddddddddddccccccccccbbbbbbbbbbaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeeeffffffffffgggggggggghhhhhhhhhhiiiiiiiiiijjjjjjjjjjkkkkkkkkkkllllllllllmmmmmmmmmmnnnnnnnnnnooooooooooppppppppppqqqqqqqqqqrrrrrrrrrrssssssssssttttttttttuuuuuuuuuuvvvvvvvvvvwwwwwwwwwwxxxxxxxxxxyyyyyyyyyyzzzzzzzzzzyyyyyyyyyyxxxxxxxxxxwwwwwwwwwwvvvvvvvvvvuuuuuuuuuuttttttttttssssssssssrrrrrrrrrrqqqqqqqqqqppppppppppoooooooooonnnnnnnnnnmmmmmmmmmmllllllllllkkkkkkkkkkjjjjjjjjjjiiiiiiiiiihhhhhhhhhhggggggggggffffffffffeeeeeeeeeeddddddddddccccccccccbbbbbbbbbbaaaa"

puts longest_palindromic_substring_dynamic(string)