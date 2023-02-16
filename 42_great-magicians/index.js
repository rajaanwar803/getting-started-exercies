"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function showMagicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function makeGreat(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians.splice(i, 1, `Great ${magicians[i]}`);
    }
}
let magicians = [
    "Anwar",
    "Kamal",
    "Afzal",
];
makeGreat(magicians);
showMagicians(magicians);
