// fruits=['Apple','Ball',"cat"];
// console.log(fruits)
// fruits.forEach((a) => {
//     console.log(a);
// });

// let age=4;
// console.log(age>45?"old":"young")
// console.log(age);

// ----------------------------------------------
// function fact(a){
// let result=1;
//  for( let i=1; i<=a;i++){
//     result=result*i;
//     console.log(result)
//  }
//  return result
// }
// console.log(fact(5))

 // ----------------------------------------------
function findMaxx(arr){
let max=arr[0]
for(let i=0;i<=arr.length;i++)
{
    if(arr[i]>max){
        max=arr[i];
    }
}
    return max;

}
let number=[];
//  const number =[4,5,6,711,45,67,7]
for(let j=0;j<5;j++)
    {
var  input=prompt("Enter any number");
console.log(input)
number.push(Number(input));
console.log(number)
}
console.log(findMaxx(number));
