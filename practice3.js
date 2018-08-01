// Exercise 1
// Write a function that reverses a string. Don’t use the “reverse” method! (Note: you can use the .split(“”) method to convert a string into an array of characters).

console.log('--------------------------------------')
console.log('Exercise 1')

function reverse_string(string) {
  strArray = string.split('');
  returnArray = [];
  let j = 0;
  for (var i = strArray.length - 1; i >= 0; i--) {
    returnArray[j] = strArray[i];
    j++
  }
  return returnArray.join('');
  // body...
}

console.log(reverse_string('doggo'));

console.log('--------------------------------------')
console.log('Exercise 2')

// Exercise 2
// Write a function that accepts a string and returns the number of times that the letter “a” occurs in it.

function findTheAs(string) {
  strArray = string.split('');
  aCount = 0;
  strArray.forEach(function(letter){
    if (letter === 'a' || letter === 'A') {
      aCount++;
    }
  })
  return aCount;
}

console.log(findTheAs('magicallyaaa'));

console.log('--------------------------------------')
console.log('Exercise 3')

// Exercise 3
// Write a function that accepts two arguments. The first argument is an array of numbers that are in ascending order. The second argument is a number to search for within in the array. The function should do a linear search and return the index at which this value is found, or it should return nil if the value is not found. See if there’s a way in which you can optimize this method to keep its number of steps to a minimum! Note: Do not use the “index” method

function findIndex(numArray, search) {
  let index = null;
  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] === search) {
      index = i;
    }
  }

  return index;
}

console.log(findIndex([1,2,3,4,5,6,7,8,9], 13));
console.log(findIndex([1,2,3,4,5,6,7,8,9], 6));


console.log('--------------------------------------')
console.log('Exercise 4')

// Exercise 4
// Write a function that accepts two arguments. The first argument is an array of numbers that are in ascending order. The second argument is a new number that is not yet in the array. The function should return a new array with the new number inserted in the proper place. Do not use the “sort” method!

function insertIntoArray(numArray2, inserted) {

  for (let i = 0; i < (numArray2.length - 1); i++) {
    if (inserted < numArray2[0]) {
      numArray2.unshift(inserted);
      break;
    } else if (inserted <= numArray2[i]){
      numArray2.splice(i, 0, inserted);
      break;
    } else if (i === numArray2.length -2 ) {
      numArray2.push(inserted);
      break;
    }
  }
  return numArray2;
}
console.log(insertIntoArray([1,2,3,4,5,7,8,9], 6));
console.log(insertIntoArray([1,2,3,4,5,7,8,9], 10));
console.log(insertIntoArray([1,2,3,4,5,7,8,9], 0));

console.log('--------------------------------------')
console.log('Exercise 5')

// Exercise 5
// Write a function that accepts two arguments. The first argument is an array of numbers that are in ascending order. The second argument is a number that is contained within the array. The function should return the string “lower” if the value is found in the lower half of the array, and it should return “higher” if the value is found within the greater half of the array. Try to optimize this algorithm so that it takes a minimum number of steps!