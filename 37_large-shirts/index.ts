function makeShirt(size:string = "large", message:string = "I love TypeScript") {
    console.log(`Making a ${size} shirt with the message: ${message}`);
}

makeShirt();
makeShirt("medium");
makeShirt("small", "TypeScript is awesome!");
