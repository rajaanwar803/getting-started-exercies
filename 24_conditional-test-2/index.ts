let name1 = "John";
let name2 = "Mary";
let age1 = 20;
let age2 = 30;
let colors = ['red', 'green', 'blue'];

// Tests for equality and inequality with strings
console.log("Is name1 == 'John'? I predict True.");
console.log(name1 == 'John');
console.log("Is name1 == 'john'? I predict False.");
console.log(name1 == 'john');

// Tests using the lower case function
console.log("Is name1 in lowercase equal to 'john'? I predict True.");
console.log(name1.toLowerCase() == 'john');
console.log("Is name2 in lowercase not equal to 'mary'? I predict False.");
console.log(name2.toLowerCase() != 'mary');

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Is age1 == age2? I predict False.");
console.log(age1 == age2);
console.log("Is age1 > age2? I predict False.");
console.log(age1 > age2);
console.log("Is age1 < age2? I predict True.");
console.log(age1 < age2);
console.log("Is age1 >= age2? I predict False.");
console.log(age1 >= age2);
console.log("Is age1 <= age2? I predict True.");
console.log(age1 <= age2);

// Tests using "and" and "or" operators
console.log("Is age1 > 18 and age2 > 18? I predict True.");
console.log(age1 > 18 && age2 > 18);
console.log("Is age1 > 18 or age2 < 18? I predict True.");
console.log(age1 > 18 || age2 < 18);

// Test whether an item is in an array
console.log("Is 'red' in colors array? I predict True.");
console.log(colors.includes('red'));
console.log("Is 'yellow' not in colors array? I predict True.");
console.log(!colors.includes('yellow'));
