// Question 1 for Job Eligibility

// {
//     let age = prompt("Enter you age here");
//     console.log(age);
//     let experience = prompt("Enter you experience here");
//     console.log(experience);
//     let canId = prompt("Enter your id here");
//     console.log(canId);
//     let id = [102, 103, 104, 105]
//     if (age >= 18 && experience >= 2) {
//         if (age > 30) {
//             if (canId !== id) {

//                 console.log("You are approved")
//             }
//             else {
//                 console.log("You are rejected")
//             }
//         }

//         else {
//             console.log("You have to go for Intership because of underage");

//         }
//     }


//     else {
//         console.log("Your Data does not match");
//     }
// }

// Question 2 Online order Eligibility

// {
//     let pass = ["jitesh", "subash", "saroj", "roshan"];
//     let bandedCustomer = ["saroj", "roshan"]
//     let cart = ["shampoo", "buscits", "cookies"];
//     let order = prompt("Enter your password to login like jitesh, saroj, subash,roshan");
//     console.log(order);
//     let itemName = prompt("Enter item name shampoo, buscuits,cookies");
//     console.log(itemName);
//     let totPrice = prompt("enter the total price")
//     console.log(totPrice)
//     let member = prompt("Enter that you are member or not")
//     console.log(member)
//     if (order === pass && itemName === cart) {
//         if (order === bandedCustomer) {
//             if (totPrice >= 1000 && member === "member") {
//                 console.log("You are free to shipping")
//             }
//             else {
//                 console.log("You may charges to ship")
//             }
//         }
//         else {
//             console.log("Your id has beed banded")
//         }
//     }
//     else {
//         console.log("You are not eligible")
//     }
// }
//Form chatgpt
// {
//     let pass = ["jitesh", "subash", "saroj", "roshan"];
//     let bandedCustomer = ["saroj", "roshan"];
//     let cart = ["shampoo", "buscits", "cookies"];
//     let order = prompt("Enter your password to login (e.g., jitesh, saroj, subash, roshan)");
//     console.log("User:", order);
//     let itemName = prompt("Enter item name (shampoo, buscits, cookies)");
//     console.log("Item:", itemName);
//     let totPrice = parseFloat(prompt("Enter the total price"));
//     console.log("Total Price:", totPrice);
//     let member = prompt("Are you a member? (yes/no)").toLowerCase();
//     console.log("Membership:", member);
//     // Main logic
//     if (pass.includes(order) && cart.includes(itemName)) {
//         if (!bandedCustomer.includes(order)) {
//             if (totPrice >= 1000 && member === "yes") {
//                 console.log("You are eligible for free shipping.");
//             } else {
//                 console.log("Shipping charges may apply.");
//             }
//         } else {
//             console.log("Your ID has been banned.");
//         }
//     } else {
//         console.log("You are not eligible to order.");
//     }
// }

// Question no 3:- for loop Odd number 1 to 20
// {
//     for (let i = 0; i <= 20; i++) {
//         if (i % 2 == 1) {
//             console.log(i)
//         }
//     }
// }

//Question 4:while loop numbers 10 down to 1
// {
//     for (let i = 10; i >= 0; i--) {
//         console.log(i)
//     }
// }

// Question 5 do ...while password prompt simulation
// {
//     let storePassword = "1234";
//     let inputPassword;
//     let loop = 1
//     do {
//         //if (inputPassword !== storePassword) {
//             inputPassword = prompt("Enter your password");
//             console.log("User Input Password", inputPassword);
//        // }
//         loop++;
//         if (inputPassword === storePassword) {
//             // console.log("Password does not match")
//             alert("You got accessed...!!!")
//         }
//         else {
//             alert("You have Not Access. Give right password")
//         }

//     } while (loop <= 3 && inputPassword !== storePassword)
// }

// Question 6 Use forEach to Print Names Starting with "Z" Only
// {
//     let user = ['jitesh', 'zenish', 'zebra', 'anil', 'asmita', 'zero', 'zeson'];
//     console.log("User:-", user)
//     user.forEach((a) => {
//         if (a[0] == "z" || a[0] == "Z")
//             console.log(a)

//     });

// }

//Next Process
// {
//     const nameList = ["Zara", "Jitesh", "John", "zack"]
//     nameList.forEach((name) => {
//         if (name.startsWith("z") || name.startsWith("")) {
//             console.log("Z name", name)
//         }
//     })
// }
//Question 7: Student Evaluation system

// {
//     const perce = 40;
//     let isAbsent = FontFaceSetLoadEvent;
//     if (isAbsent) {
//         switch (true) {
//             case (perce >= 40):
//                 console.log("Youa are pass")
//                 break;
//             case (perce > 80):
//                 console.log("You have got Dinction")
//                 break;
//             default:
//                 console.log("Invalid Score")
//                 console.log(perce >= 40)
//                 break;

//         }
//     }
//     else {
//         console.log("you are absent")
//     }
// }
//Next Process
// {
//     const Score = 85;
//     const isAbsent = false;
//     if (isAbsent) {
//         console.log("Absent")
//     }
//     else if (Score < 0 || Score > 100) {
//         console.log("Invalid Value")
//     }
//     else if (Score >= 80) {
//         console.log("Distinction")
//     }
//     else if (Score >= 40) {
//         console.log("Pass")
//     }
//     else {
//         console.log("fail")
//     }
// }

//Question 8
// {
//     const balace = 2000;
//     const withDrawAmount = 500;
//     if (withDrawAmount % 100 !== 0) {
//         console.log("Amount must be multiple of 100");
//     } else if (withDrawAmount < 100) {
//         console.log("Minimum withdraw is 100")
//     } else if (withDrawAmount > balace) {
//         console.log("Insufficient amount ")
//     }
//     else {
//         console.log("WithDraw Successful...!!!")
//     }

// }
// Question 11:
// {
//     let correctNumber = "7";
//     let guess;
//     let attmpt = 0
//     do {
//         if (guess !== correctNumber) {
//             guess = prompt("guess a number");
//             console.log("Your guess Number is", guess)
//         }
//         attmpt++;
//         if (guess === correctNumber) {
//             console.log("Your guess is right and number is ", guess)
//         }
//         else {
//             console.log("Worng Guess", guess)
//         }

//     } while (attmpt < 3 && guess !== correctNumber)
// }