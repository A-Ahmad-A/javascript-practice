// TASK 1
//---------------------------------------------------------------------
function sumEvenNumbers(array) {
    let sum = 0;
    
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
        sum += array[i];
      }
    }
    return sum;
  }

  const numbers = [50, 27, 31, 4, 28, 59];
  const sumOfNumbers = sumEvenNumbers(numbers);
  console.log("TASK1: ");
  console.log(sumOfNumbers); 

//---------------------------------------------------------------------
// TASK 2
// Method 1: using built in function
const stringArray = ["ALIAHMAD", "FASTNUCES", "FOLIO3" , "PUNJABUNI"];

const longestString = stringArray.reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
}, "");
console.log("TASK2: "); 
console.log("Method1 Longest string:", longestString);

//Method 2: doing it manually
//---------------------------------------------------------------------
function LongestString(strings) {
    let longest = "";

    for (let i = 0; i < strings.length; i++) {
      if (strings[i].length > longest.length) {
        longest = strings[i];
      }
    }
    console.log("Method2 Longest String: " + longest);
  }
  
  const stringsArray = ["apple", "banana", "cherry", "date", "elderberry"];
  LongestString(stringsArray);

//---------------------------------------------------------------------

// Task 3
let elementToFind = "FASTNUCES";
let index = stringArray.indexOf(elementToFind);

if (index !== -1) {
    console.log("TASK3: ");
    console.log(`${elementToFind} found at index ${index}`);
  } else {
    console.log("TASK3: ");
    console.log(`Element not found in the array`);
  }

//---------------------------------------------------------------------

// Task 4
//---------------------------------------------------------------------

const objects = [
    { name: "Car", value: 100 },
    { name: "Bike", value: 25 },
    { name: "Piano", value: 56 },
    { name: "M416", value: 200 },
];

  const highestValueObject = objects.reduce((max, current) => {
    return current.value > max.value ? current : max;
  }, objects[0]); 

  console.log("TASK4: ");
  //console.log("Object with the highest value:", highestValueObject.name , highestValueObject.value);
  console.log("Object with the highest value:", highestValueObject);
  
// Task 5
//------------------------------------------------------

const numberArray = [5, 2, 9, 1, 5, 6];

numberArray.sort();
//we can also use comparison here
numberArray.sort((no1,no2) => no1 - no2);
console.log("TASK 5:");
console.log("Sorted array in ascending order:", numberArray);
  
// Task 6
//------------------------------------------------------
// ARRAY AND OBJECT DESTRUCTURING are features in javascript that allow you to extract alues from Arrays and Objects and assign them to Variables 

// Using array destructuring to extract values

const Array = [1, 2, 3, 4];
const [a, b, c , d] = Array;
console.log(a); 
console.log(b); 
console.log(c); 
console.log(d);  

// Using object destructuring to extract values
const Object = { Name: "AliAhmad", age: 22 , university: "Fast"};
const { Name, age, city = "Unknown" , university } = Object;

console.log(Name);
console.log(age); 
console.log(city); 
console.log(university)