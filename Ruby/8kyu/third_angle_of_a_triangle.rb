# You are given two angles (in degrees) of a triangle.
#
# Write a function to return the 3rd.
#
# Note: only positive integers will be tested.
#
# def other_angle(a, b)
#     # your code here
# end

# My solution

def other_angle(a, b)
    180 - (a + b)
end

# The most popular solution
# 
# def other_angle(a, b)
#   180 - a - b
# end
