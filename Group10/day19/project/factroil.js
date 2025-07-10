//Factorial of any number
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++)
        result = result * i;
    return result;
}
let num = 12;
//let num = prompt("Enter Factorial Number ");
console.log(num);
let data = factorial(num);
console.log("Your factorial value is ", data);
