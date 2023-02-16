"use strict";
function makeShirt(size = "large", message = "I love TypeScript") {
    console.log(`Making a ${size} shirt with the message: ${message}`);
}
makeShirt();
makeShirt("medium");
makeShirt("small", "TypeScript is awesome!");
