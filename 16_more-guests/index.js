"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let dinnerGuests = [
    "Mohsin",
    "Mustafa",
    "Umar"
];
for (let i = 0; i < dinnerGuests.length; i++) {
    console.log(`Dear ${dinnerGuests[i]}, I would like to invite you to dinner next week.`);
}
const guestWhoCantMakeIt = dinnerGuests[1];
console.log(`${guestWhoCantMakeIt} can't make it to dinner, unfortunately.`);
dinnerGuests[1] = "Murtaza";
for (let i = 0; i < dinnerGuests.length; i++) {
    console.log(`Dear ${dinnerGuests[i]}, I would like to invite you to dinner next week.`);
}
console.log("Good news, everyone! I just found a bigger dinner table!");
dinnerGuests.unshift("Afzal"); // Add one new guest to the beginning of the array
dinnerGuests.splice(2, 0, "Kamal"); // Add one new guest to the middle of the array without removing any guest
dinnerGuests.push("Junaid"); // Add one new guest to the end of the array
for (let i = 0; i < dinnerGuests.length; i++) {
    console.log(`Dear ${dinnerGuests[i]}, I would like to invite you to dinner next week.`);
}
