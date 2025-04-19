// Dog Age Converter
function dogToHumanYears(dogAge) {
    // Convert dog age to human years
    let humanYears;
    if (dogAge <= 2) {
        humanYears = dogAge * 10.5; 
    } else {
        humanYears = 21 + (dogAge - 2) * 4; 
    }
    return humanYears;
}

let dogAge = 5;
console.log(`A ${dogAge}-year-old dog is about ${dogToHumanYears(dogAge)} human years old.`);

// Tip Calculator
function calculateTip(total, percentage) {
    // Calculate the tip
    let tip = total * (percentage / 100);
    return tip;
}

let total = 50; // Total bill amount
let percentage = 15; // Tip percentage
console.log(`Tip: $${calculateTip(total, percentage)}`);

//Even or Odd

function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

let num = 7;
console.log(`The number ${num} is ${checkEvenOdd(num)}.`);
