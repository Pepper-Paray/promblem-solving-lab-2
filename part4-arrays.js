//Problem 1: Favorite Foods

let favoritefood = [
    "chicken and dumplings",
    "fried chicken",
    "strawberries",
    "pancakes",
    "watermelon"
];
console.log(favoritefood);
favoritefood.push("spagetti");

//Problem 2: Guest List
let People = [
    "ashley",
    "mark",
    "wilhelmina",
    "paulette",
    "thomas",
    "lois",
    "clark"
]
console.log(People)
People.shift("ashley")
console.log(People)
People.push("ash")
console.log(People)
let length = People.length
console(length)

//Problem 3: Weekend Tasks

let tasks = ["laundry", "groceries", "coding", "naps"];
console.log(tasks)
printTasks(tasks)
console.log(tasks)

//Problem 4: Reverse It (Manual Reverse)
let numbers = [1, 2, 3, 4, 5];
console.log(numbers)
reverse(numbers)
console.log(numbers)

//Bonus: Random Picker
let lunches = ["burrito", "pizza", "sandwich", "ramen"];
console.log(randomLunch(lunches)); "pizza"
