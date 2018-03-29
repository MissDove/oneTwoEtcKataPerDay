# You get an array of numbers, return the sum of all of the positives ones.
#
# Example [1,-4,7,12] => 1 + 7 + 12 = 20
#
# Note: array may be empty, in this case return 0.
#
#   def positive_sum(arr)
#     # your code here
#   end

# My solution

def positive_sum(arr)
  sum = 0
  arr.each do |element|
    if element > 0
      sum += element
    end
  end
  sum
end

# The most popular solution

# def positive_sum(arr)
#   arr.select{|x| x > 0}.reduce(0, :+)
# end
