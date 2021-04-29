require 'pry'

def max_repeating(sequence, word)
 sub = word
 k = 0
 while Regexp.new(sub).match(sequence)
  sub += word
  k += 1
 end

 k

end

sequence = "aaabaaaabaaabaaaabaaaabaaaabaaaaba"
word = "aaaba"

puts max_repeating(sequence, word)