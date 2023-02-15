// Define the array of places to visit
let placesToVisit: string[] = [
    'Tokyo',
    'Paris',
    'Berlin',
    'New York',
    'Amsterdam'
];

// Print the array in its original order
console.log("Original order:", placesToVisit);

// Print the array in alphabetical order without modifying the actual list
console.log("Alphabetical order:", [...placesToVisit].sort());

// Print the array to show it's still in its original order
console.log("Original order:", placesToVisit);

// Print the array in reverse alphabetical order without changing the order of the original list
console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());

// Print the array to show it's still in its original order
console.log("Original order:", placesToVisit);

// Reverse the order of the list and print it to show the change
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);

// Reverse the order of the list again and print it to show it's back to its original order
placesToVisit.reverse();
console.log("Original order:", placesToVisit);

// Sort the array to store it in alphabetical order and print it to show the change
placesToVisit.sort();
console.log("Alphabetical order:", placesToVisit);

// Sort the array to store it in reverse alphabetical order and print it to show the change
console.log("Reverse alphabetical order:", placesToVisit.sort().reverse());
