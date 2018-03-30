# Convert number to reversed array of digits
# Given a random number:
#
# You have to return the digits of this number within an array in reverse order.
#
# Example:
# 348597 => [7,9,5,8,4,3]
#
# def digitize(n)
#   #your code here
# end

# My solution

def digitize(n)
  n.to_s.split('').reverse.map { |number| number.to_i }
end

# The most popular solution
# 
# def digitize(n)
#   n.to_s.chars.reverse.map(&:to_i)
# end
