# Create a function which answers the question "Are you playing banjo?".
# If your name starts with the letter "R" or lower case "r", you are playing banjo!
#
# The function takes a name as its only argument, and returns one of the following strings:
#
# name + " plays banjo"
# name + " does not play banjo"
# Names given are always valid strings.
#
# def are_you_playing_banjo(name)
#   # Implement me!
#   return name
# end

# My solution

def are_you_playing_banjo(name)
  array = name.split('')
  array[0] == 'R' || array[0] == 'r' ? name + " plays banjo" : name + " does not play banjo"
end

# The most popular solution
#
# def are_you_playing_banjo(name)
#   name[0].downcase == "r" ? "#{name} plays banjo" : "#{name} does not play banjo"
# end
