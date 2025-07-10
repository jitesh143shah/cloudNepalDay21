//quetion 12
let names = ["Kathmandu", "Pokhara", "Lalitpur", "Biratnagar"];
names.forEach((n) => {
    console.log("City names: ", n)
})
names.forEach((c) => {
    if (c.startsWith("k") || c.startsWith("K")) {
        console.log("Your city is ", c)
    }
})