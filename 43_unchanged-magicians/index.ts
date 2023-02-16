function showMagicians(magicians:string[]) {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function makeGreat(magicians:string[]): string[] {
    let greatMagicians: string[] = []
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push(`Great ${magicians[i]}`);
    }
    return greatMagicians;
}

let magicians: string[] = [
    "Anwar",
    "Kamal",
    "Afzal",
];

let greatMagicians: string[] = makeGreat(magicians);
showMagicians(greatMagicians);
showMagicians(magicians);


export {}
