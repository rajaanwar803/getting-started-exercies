function showMagicians(magicians:string[]) {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function makeGreat(magicians:string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians.splice(i, 1, `Great ${magicians[i]}`);
    }
}

let magicians: string[] = [
    "Anwar",
    "Kamal",
    "Afzal",
];

makeGreat(magicians)
showMagicians(magicians);


// Another way by Chat GPT
/*
function make_great(magicians: string[]): string[] {
    const great_magicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
      great_magicians.push(`${magicians[i]} the Great`);
    }
    return great_magicians;
}
  
function show_magicians(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
      console.log(magicians[i]);
    }
}
  
let magicians: string[] = ["David Copperfield", "David Blaine", "Penn Jillette", "Teller"];
  
magicians = make_great(magicians);
  
show_magicians(magicians);
*/

export {}
