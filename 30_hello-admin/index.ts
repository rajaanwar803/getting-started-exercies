let userNames: string[] = [
    "anwar",
    "afzal",
    "admin",
    "umar",
    "kamal",
];

// One way
/*
for (let i = 0; i < userNames.length; i++) {
    if (userNames[i] == 'admin') {
        console.log(`Hello ${userNames[i]}, would you like to see a status report?`);
    } else {
        console.log(`Hello ${userNames[i]}, thank you for logging in again`);
    }
}
*/

// Second way
for (let userName of userNames) {
    if (userName == 'admin') {
        console.log(`Hello ${userName}, would you like to see a status report?`);
    } else {
        console.log(`Hello ${userName}, thank you for logging in again`);
    }
}
