p '*' * 50
# Write a method that prints out every number from 1 to 100.
p 'Write a method that prints out every number from 1 to 100.'
num = 1
100.times do 
  p num
  num += 1
end

p '*' * 50
# Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 … 99).

p 'Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 … 99).'

num = 1
100.times do
  if num % 2 != 0
    p num
  end
  num += 1
end

p '*' * 50

# Write a method that accepts an array of numbers as a parameter, and counts how many 55’s there are in the array.

p 'Write a method that accepts an array of numbers as a parameter, and counts how many 55’s there are in the array.'

def how_many_55 (num_array) 
  count = 0
  num_array.each do |num|
    if num == 55
      count += 1
    end
  end
  return count
end

p how_many_55([55, 6, 4, 22, 55, 3, 44, 55, 55])

p '*' * 50

# Write a method that accepts an array of strings and returns a new array that has the string "awesomesauce" inserted between every string. 
# For example, if the initial array is ["a", "b", "c", "d", "e"], then the returned array should be ["a", "awesomesauce", "b", "awesomesauce", "c", "awesomesauce", "d", "awesomesauce", "e"].

def awesomesauce(string_array)
  awesome_array = []
  string_array.each do |i|
    awesome_array << i
    awesome_array << 'awesomesauce'
  end
  awesome_array.pop
  return awesome_array
end

p awesomesauce(['dog', 'cat', 'bologna', 'foot'])

# Start with the hash: item_amounts = {chair: 5, table: 2}
# Someone just bought two chairs. Change the hash such that the chair amount is 3.
# The final result should be: {chair: 3, table: 2}

item_amounts = {chairs: 5, tables: 2}
p item_amounts[:chairs]

chairs_bought = 2
item_amounts[:chairs] = item_amounts[:chairs] - chairs_bought
p item_amounts
