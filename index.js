// CHALLENGE 1
// Write a function which takes a list of strings and returns each line prepended by the correct number.
// The numbering starts at 1. The format is n: string. Notice the colon and space in between.


// SOLUTION
var array = ["Messi", "Haaland", "Mbappe", "Osimhen", "De Bruyne", "Benzema", "Modric"];

var number = (array) => {
    return array.map((item, index) => {
        return `${index + 1}: ${item}`
    });
};

// Test cases
console.log(number([]));
console.log(number(array));


// OTHER SOLUTIONS 
var number = array.map((item, index) => `${index + 1}: ${item}`);
 
console.log(number);



// _______________________________________________________________________________________________________________



// CHALLENGE 2
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false


// SOLUTION
function XO(str) {
    // Convert the string to lowercase to make the comparison case-insensitive
    str = str.toLowerCase();
  
    // Initialize counters for 'x' and 'o'
    let countX = 0;
    let countO = 0;
  
    // Iterate through each character in the string
    for (let char of str) {
      // Increment the respective counter based on the character
      if (char === 'x') {
        countX++;
      } else if (char === 'o') {
        countO++;
      }
    }
  
    // Check if the counts of 'x' and 'o' are equal
    return countX === countO;
}
  
  // Test cases
  console.log(XO("ooxx"));    // true
  console.log(XO("xooxx"));   // false
  console.log(XO("ooxXm"));   // true
  console.log(XO("zpzpzpp"));  // true
  console.log(XO("zzoo"));     // false
  

  // SOLUTION
  const XO = str => {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
  }

  
// SOLUTION
  function XO(str) {
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}
