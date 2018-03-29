# Clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.
#
# Your task is to make 'Past' function which returns time converted to miliseconds.
#
# #####Example:
#
# past(0, 1, 1) == 61000
# Note! h, m and s will be only Natural numbers!
#
# def past(h, m, s)
#   # Good Luck!
# end

# My solution

def past(h, m, s)
  h = (3600*1000)*h
  m = (60 *1000)*m
  s = 1000*s
  h + m + s
end

# The most popular solution

# def past(h, m, s)
#   (h * 3600 + m * 60 + s) * 1000
# end
