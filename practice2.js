// Write a function that accepts an array of strings and returns a new array containing every other string from the original array. For example, if the input is ["a", "b", "c", "d", "e", "f"], the output should be ["a", "c", "e"].
//
// def select_even_items(strings)
//   result = []
//   index = 0
//   strings.each do |string|
//     if index % 2 == 0
//       result << string
//     end
//     index = index + 1
//   end
//   result
// end
// p select_even_items(["a", "b", "c", "d", "e", "f"])

console.log('**********************************');
console.log('Problem 1');
function selectOddItems(strings) {
  let result = [];
  let i = 1;
  strings.forEach(function(string) {
    if (i % 2 !== 0) {
      result.push(string);
    }
    i++;
  })
  return result
}
console.log(selectOddItems(["a", "b", "c", "d", "e", "f"]));
console.log('**********************************');

// Write a method that accepts one argument - an array of numbers. The method should return the greatest number. For example, if the input is [5, 4, 8, 1, 2], the output should be 8.
//
// def max(numbers)
//   current_max = numbers[0]
//   numbers.each do |number|
//     if number > current_max
//       current_max = number
//     end
//   end
//   current_max
// end
// p max([5, 4, 8, 1, 2])

console.log('Problem 2');
function maxNumber(numbers) {
  let current_max = numbers[0];
  numbers.forEach(function(number) {
    if (number > current_max) {
      current_max = number;
    }
  })
  return current_max
}

console.log(maxNumber([5, 4, 8, 1, 2]));
console.log('**********************************');


// Write a method that accepts a number and returns its factorial. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.
//
// def factorial(number)
//   result = 1
//   current_number = number
//   number.times do
//     result = result * current_number
//     current_number = current_number - 1
//   end
//   result
// end
// p factorial(5)

console.log('Problem 3');
function factorial(number) {
  let result = 1;
  let current_number = number;
  for (let i = 0; i < number; i++) {
    result = result * current_number;
    current_number = current_number - 1;
  }
  return result;
}

console.log(factorial(5));
console.log('**********************************');

// Write a method that accepts one argument - an array of numbers that are in ascending order. The method that returns a new array with the same values in descending order. However, do not use the "reverse" method built in to Ruby.
//
// def descending(numbers)
//   result = []
//   index = numbers.length - 1
//   numbers.length.times do
//     result << numbers[index]
//     index = index - 1
//   end
//   result
// end
// p descending([1, 3, 5, 7])

console.log('Problem 4');
function descending(numbers) {
  let result = [];
  for (let i = numbers.length - 1; i >= 0; i--) {
    result.push(numbers[i]);
  }
  return result;
}

console.log(descending([1, 3, 5, 7]));
console.log('**********************************');

// Write a method that accepts two arrays of numbers, and returns an array of every sum of every combination of single numbers from first and second array. For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should return this array: [101, 501, 1001, 105, 505, 1005, 110, 510, 1010].
// 
// def sum_combinations(numbers_1, numbers_2)
//   result = []
//   numbers_1.each do |number_1|
//     numbers_2.each do |number_2|
//       result << number_1 + number_2
//     end
//   end
//   result
// end
// p sum_combinations([1, 5, 10], [100, 500, 1000])

console.log('Problem 5');
function sumCombinations(nums1, nums2) {
  result = [];
  nums1.forEach(function(num1) {
    nums2.forEach(function(num2) {
      result.push(num1 + num2);
    })
  })

  return result;
}

console.log(sumCombinations([1, 5, 10], [100, 500, 1000]));
console.log('**********************************');

