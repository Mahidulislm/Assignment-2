//1) Write a function named ‘calculateSum’ that takes two arguments and returns their sum.
function calculateSum (a,b) {
    let sum = a+b;
    return sum;
}
//console.log(calculateSum(10,20));

//2) Write a function named ‘isEven’ that takes one argument and returns true if the number is even, and false otherwise.
function isEven(num){
    return num % 2 == 0;
}
//console.log(isEven(4));
//console.log(isEven(7));

//3) Write a function named ‘findMax’ that takes an array of numbers and returns the largest number in the array.
const findMax = (array) => {
    let max = array[0];
    for (let i = 0; i<array.length;i++) {
        if(array [i] > max) max = array [i];
    }
    return max;
};
//console.log(findMax([10, 20, 100, 200]));

//4) Write a function named ‘reverseString’ that takes a string and returns the string reversed.
function reverseString(string){
    return string.split("").reverse().join("");
}
//console.log(reverseString("World"))

//5) Write a function named ‘filterOddNumbers’ that takes an array of numbers and returns a new array containing only the odd numbers.
function filterOddNumbers(array) {
    let oddNum=[];
    for(let i=0; i < array.length; i++){
        if (array[i] % 2 != 0){
            oddNum.push(array[i]);
        }
    }
    return oddNum;
}
//console.log (filterOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]));

//6) Write a function named ‘sumArray’ that takes an array of numbers and returns the sum of all elements.
function sumArray(array){
    const sum = array.reduce((acc,currentVal) => acc+currentVal);
    return sum;
}
//console.log(sumArray([1,2,5,7,10,]));

//7) Write a function named ‘sortArray’ that takes an array of numbers and returns a new array sorted in ascending order.
function sortArray(array){
    const newArray = array.sort((a,b)=>a-b);
    return newArray;
}
//console.log(sortArray([1,8,4,9,6]));

// Write a function named ‘capitalizeFirstLetter’ that takes a string and returns the same string with
//the first letter capitalized. Ex-  console.log(capitalizeFirstLetter("hello"));  // Output:  "Hello"
function capitalizeFirstLetter(string){
    return string[0].toUpperCase() + string.slice(1);
}
//console.log(capitalizeFirstLetter("hello"));

