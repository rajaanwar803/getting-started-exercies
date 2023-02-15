let dinnerGuests: string[] = ["Mohsin", "Mustafa", "Umar"];

for (let i = 0; i < dinnerGuests.length; i++) {
    console.log(`Dear ${dinnerGuests[i]}, I would like to invite you to dinner next week.`);
}

const guestWhoCantMakeIt = dinnerGuests[1];
console.log(`${guestWhoCantMakeIt} can't make it to dinner, unfortunately.`);

dinnerGuests[1] = "Murtaza";

for (let i = 0; i < dinnerGuests.length; i++) {
    console.log(`Dear ${dinnerGuests[i]}, I would like to invite you to dinner next week.`);
}


export {}
