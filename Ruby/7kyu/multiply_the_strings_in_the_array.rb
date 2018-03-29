# You received an array with two strings. Create a function that will return their product as a string.
#
# E.g. arrMultiply(['9','6']) should return '54'

# def arrMultiply(arr)
#   # your solution here
# end

# My solution

def arrMultiply(arr)
  (arr[0].to_i * arr[1].to_i).to_s
end

# The most popular solution

# def arrMultiply(arr)
#   arr.map(&:to_i).reduce(:*).to_s
# end
