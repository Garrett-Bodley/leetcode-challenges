# 367. Valid Perfect Square
# Given a positive integer num, return true if num is a perfect square or false otherwise.

# A perfect square is an integer that is the square of an integer. In other words, it is the product of some integer with itself.

# You must not use any built-in library function, such as sqrt.

 

# Example 1:

# Input: num = 16
# Output: true
# Explanation: We return true because 4 * 4 = 16 and 4 is an integer.
# Example 2:

# Input: num = 14
# Output: false
# Explanation: We return false because 3.742 * 3.742 = 14 and 3.742 is not an integer.



def is_perfect_square(num)
  i = 0
  j = num
  while i <= j
    mid = (j + i)/2
    if(mid ** 2 == num)
      return true
    elsif(mid ** 2 > num)
      j = mid - 1
    elsif (mid ** 2 < num)
      i = mid + 1
    end
  end
  return false
end