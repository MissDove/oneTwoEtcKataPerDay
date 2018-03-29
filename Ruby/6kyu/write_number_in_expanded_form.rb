# Write Number in Expanded Form
# You will be given a number and you will need to return it as a string in Expanded Form. For example:
#
# expanded_form(12); # Should return '10 + 2'
# expanded_form(42); # Should return '40 + 2'
# expanded_form(70304); # Should return '70000 + 300 + 4'
# NOTE: All numbers will be whole numbers greater than 0.
#
# def expanded_form(num)
#   # Your code here
# end

# My solution

def expanded_form(num)
  len = num.to_s.length
  result = ""
  num.to_s.split("").each_with_index {|n,i| result += n + "0" * (len - i - 1) + " + " if n != "0"}
  result[0..-4]
end

# The most popular solution

# def expanded_form(num)
#   num.to_s
#      .chars
#      .reverse
#      .map.with_index { |d, idx| d.to_i * 10**idx }
#      .reject(&:zero?)
#      .reverse
#      .join (' + ')
# end
