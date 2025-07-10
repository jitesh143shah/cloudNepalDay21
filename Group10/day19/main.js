// Calculate total price with discount
// {
//     function discount(dis) {
//         return dis = dis * 0.1;
//     }
// }
// {
//     let item = 10;
//     let qty = 5;
//     console.log("Quamtity", qty)
//     let total = item * qty;
//     console.log("Total", total)

//     let data = discount(total);
//     console.log("Discount Amount", data)
//     let paybleAmt = total - data;
//     console.log("Total Payble Amount is ", paybleAmt);

// }
function disCalculation(p, q, dP) {
    let price = p;
    let qty = q;
    let total = price * qty;
    let disPer = ((total * dP) / 100);
    let finalAmount = total - disPer;
    console.log("Price", price);
    console.log("Quantity", qty);
    console.log("Total Amount ", total);
    console.log("Discount Percent is " + dP + "%")
    console.log("Discount AMount ", disPer);
    return finalAmount;
}
{
    let price = prompt("Enter the Item prize");
    let qty = prompt("Enter how many item required or quantity")
    let disPer = prompt("Enter the Discount %");
    let finalAmount = disCalculation(price, qty, disPer);
    console.log("Amount TO pay Total", finalAmount);

}