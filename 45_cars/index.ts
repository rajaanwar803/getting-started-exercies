function createCar(manufacturer: string, modelName: string, ...options: [string, any][]) {
    let car = {
        manufacturer: manufacturer,
        modelName: modelName,
    };
    for (let i = 0; i < options.length; i++) {
      car[options[i][0]] = options[i][1];
    }
    return car;
}
  
let myCar = createCar("Toyota", "Corolla", ["color", "red"], ["hasSunroof", true]);

console.log(myCar);
