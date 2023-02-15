let userNames: string[] = [
    
];


if (userNames.length > 0) {
    for (let userName of userNames) {
        if (userName == 'admin') {
            console.log(`Hello ${userName}, would you like to see a status report?`);
        } else {
            console.log(`Hello ${userName}, thank you for logging in again`);
        }
    }
} else {
    console.log("We need to find some users!")
}

export {}
