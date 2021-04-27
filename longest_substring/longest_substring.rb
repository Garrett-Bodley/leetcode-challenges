# Given a string s, find the length of the longest substring without repeating characters.

require 'pry'

def length_of_longest_substring(s)
   
  sub = ""
  subs = []

  s.each_char do |char|
    
    if sub.include?(char)
      
      subs.push(sub)
      if sub[-1] != char
        sub = sub[-1] << char
      else
        sub = char
      end
    else
      
      sub << char
    end

  end
  
  subs.push(sub)
  subs.max_by{|i| i.length}.length

end

puts length_of_longest_substring("dvdf")