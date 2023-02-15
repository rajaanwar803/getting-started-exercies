"use strict";
let currentUsers = [
    "anwar",
    "afzal",
    "kamal",
    "mohsin",
    "umar",
    "murtaza",
];
let newUsers = [
    "mustafa",
    "anwar",
    "hamza",
    "ali",
    "Afzal",
];
for (let newUser of newUsers) {
    let userExists = false;
    for (let currentUser of currentUsers) {
        if (currentUser.toLowerCase() === newUser.toLowerCase()) {
            userExists = true;
            break;
        }
    }
    if (userExists) {
        console.log(`Sorry, the username '${newUser}' is already taken. Please choose a different username.`);
    }
    else {
        console.log(`Congratulations! The username '${newUser}' is available.`);
    }
}
