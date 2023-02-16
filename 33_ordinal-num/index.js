"use strict";
let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// One way
for (let num of numArray) {
    if (num < 4) {
        if (num == 1) {
            console.log(`${num}st`);
        }
        else if (num == 2) {
            console.log(`${num}nd`);
        }
        else {
            console.log(`${num}rd`);
        }
    }
    else {
        console.log(`${num}th`);
    }
}
// Another way
/*
for (let num of numArray) {
    let ordinal;
    if (num === 1) {
      ordinal = "st";
    } else if (num === 2) {
      ordinal = "nd";
    } else if (num === 3) {
      ordinal = "rd";
    } else {
      ordinal = "th";
    }
    console.log(num + ordinal);
}
*/
