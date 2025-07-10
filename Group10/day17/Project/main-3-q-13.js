// Question 13: Voting Eligibility Check
{
    let age = 15;
    let isBanded = false;
    let hasCitizen = true;
    if (isBanded) {
        console.log("You are banded...!!!")
    } else if (hasCitizen && age > 18) {
        console.log("You are elligible to go vote");
    }
    else {
        console.log("Your age is not valid for voting")
    }


}