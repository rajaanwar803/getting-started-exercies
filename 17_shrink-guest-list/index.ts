let dinnerGuests: string[] = [
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

console.log("Good news, everyone! I just found a bigger dinner table!")

dinnerGuests.unshift("Afzal"); // Add one new guest to the beginning of the array
dinnerGuests.splice(2, 0, "Kamal") // Add one new guest to the middle of the array without removing any guest
dinnerGuests.push("Junaid"); // Add one new guest to the end of the array

for (let i = 0; i < dinnerGuests.length; i++) {
    console.log(`Dear ${dinnerGuests[i]}, I would like to invite you to dinner next week.`);
}

console.log("Unfortunately, the new dinner table won't arrive in time, so I can only invite two people for dinner.");

while (dinnerGuests.length > 2) {
    let removedGuest = dinnerGuests.pop()
    console.log(`I'm sorry, ${removedGuest}, but I can't invite you to dinner anymore.`);
}

for (let i = 0; i < dinnerGuests.length; i++) {
    console.log(`Dear ${dinnerGuests[i]}, I'm happy to let you know that you're still invited to dinner!`);
}

dinnerGuests.splice(0, 2);
console.log(dinnerGuests);

export {}
