"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function showMagicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function makeGreat(magicians) {
    let greatMagicians = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push(`Great ${magicians[i]}`);
    }
    return greatMagicians;
}
let magicians = [
    "Anwar",
    "Kamal",
    "Afzal",
];
let greatMagicians = makeGreat(magicians);
showMagicians(greatMagicians);
showMagicians(magicians);
