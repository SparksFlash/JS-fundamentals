// add elements to an array
var lastBench = ['kalam', 'balam', 'salam'];
lastBench.push('jalam');
lastBench.push('palam');
lastBench.push('nalam');
// console.log(lastBench);

var friendsAge = [11, 13, 17, 12];
// friendsAge.push(15);
console.log(friendsAge);

// remove an element from an array
var lastItem = friendsAge.pop();
// friendsAge.pop();
console.log(friendsAge);
console.log(lastItem);

// javascript remove first item from an array !!

var fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
console.log(fruits.shift());

var arr = [1, 2, 3, 4]; 
var theRemovedElement = arr.shift(); // theRemovedElement == 1
console.log(arr); // [2, 3, 4]

// javascript array add element in the beginning !!!

const array = [3, 2, 1]
const newFirstElement = 4
const newArray = [newFirstElement].concat(array) // [ 4, 3, 2, 1 ]
console.log(newArray);