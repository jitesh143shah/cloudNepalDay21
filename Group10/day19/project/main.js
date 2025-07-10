// Create a function findMax(arr) that returns the largest number from an array of numbers.
// Write a function factorial(n) that returns the factorial of a positive integer n.
// Write a function capitalizeFirstLetters(str) that capitalizes the first letter of every word in a sentence.
// Write a function convertToFahrenheit(celsius) that converts Celsius temperature to Fahrenheit.
// Write a function isPalindromeNumber(num) that checks whether a given number is a palindrome.
// A palindrome number reads the same backward as forward.

//Question 1 largest number
function findMaxValue(a) {
    a.forEach((n) => { });
    console.log(a);
    if (a.length === 0) {
        console.log("Array is empty")
    }
    let max = a[0];
    for (let i = 1; i <= a.length; i++) {
        if (arr[i] > max) {
            max = a[i];
        }
    }
    return max;
}


let arr = [0, 55, 45, 78, 98, 2];
let data = findMaxValue(arr);
console.log("Max value is ", data);


