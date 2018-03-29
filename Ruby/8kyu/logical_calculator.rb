# Your task is to calculate logical value of boolean array. Test arrays are one-dimensional and their size is in the range 1-50.
# Links referring to logical operations: AND, OR and XOR.
# You should begin at the first value, and repeatedly apply the logical operation across the remaining elements in the array sequentially.
# First Example:
# Input: true, true, false, operator: AND
# Steps: true AND true -> true, true AND false -> false
# Output: false
# Second Example:
# Input: true, true, false, operator: OR
# Steps: true OR true -> true, true OR false -> true
# Output: true
# Third Example:
# Input: true, true, false, operator: XOR
# Steps: true XOR true -> false, false XOR false -> false
# Output: false
# Input:
# boolean array, string with operator' s name: 'AND', 'OR', 'XOR'.
# Output:
# calculated boolean

# def logical_calc(array, op)
#   #your code here
# end

# My solution

def logical_calc(arr, op)
  op=='AND' ? arr.reduce(:&) : op=='OR' ? arr.reduce(:|) : arr.reduce(:^)
end

# The most popular solution
# 
# def logical_calc(arr, op)
#   op=='AND' ? arr.reduce(:&) : op=='OR' ? arr.reduce(:|) : arr.reduce(:^)
# end
