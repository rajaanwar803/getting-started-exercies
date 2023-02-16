"use strict";
function makeAlbum(artistName, albumTitle, tracksNumber) {
    let album = {
        artist: artistName,
        title: albumTitle,
    };
    if (typeof tracksNumber !== 'undefined') {
        album['tracks'] = tracksNumber;
    }
    return album;
}
let album1 = makeAlbum('Jazzy B', 'Romeo');
let album2 = makeAlbum('Imran Khan', 'Unforgettable', 15);
let album3 = makeAlbum('Amrinder Gill', 'Dildarian', 8);
console.log(album1);
console.log(album2);
console.log(album3);
