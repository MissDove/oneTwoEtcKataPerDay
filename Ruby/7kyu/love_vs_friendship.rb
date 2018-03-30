# If　a = 1, b = 2, c = 3 ... z = 26
#
# Then l + o + v + e = 54
#
# and f + r + i + e + n + d + s + h + i + p = 108
#
# So friendship is twice stronger than love :-)
#
# The input will always be in lowercase and never be empty.
#
# def words_to_marks(string)
#   #your code here
# end

# My solution

def words_to_marks(string)
  new_array = ('a'..'z').to_a
  string.split('').map { |letter| new_array.index(letter) + 1 }.reduce(:+)
end

# The most popular solution
# 
# def words_to_marks(string)
#   string.sum - string.size * 96
# end
