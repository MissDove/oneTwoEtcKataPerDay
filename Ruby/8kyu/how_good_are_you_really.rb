# There was a test in your class and you passed it. Congratulations!
# But you're an ambitious person. You want to know if you're better than the average student in your class.
# You got an array with your colleges' points. Now calculate the average to your points!
#
# Return True if you're better, else False!
#
# Note:
# Your points are not included in the array of your classes points. For calculating the average point you may add your point to the given array!

# def better_than_average(arr, points)
#   # Your code here
# end

# My solution

def better_than_average(arr, points)
  (arr.reduce(0, :+)/arr.size) < points ? true : false
end

# The most popular solution
# 
# def better_than_average(arr, points)
#   arr.inject(:+) / arr.length < points
# end
