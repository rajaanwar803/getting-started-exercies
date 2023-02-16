function orderSandwich(...ingredients: string[]) {
    console.log("Sandwich order:");
    if (ingredients.length === 0) {
      console.log("- Nothing selected");
    } else {
      for (let i = 0; i < ingredients.length; i++) {
        console.log(`- ${ingredients[i]}`);
      }
    }
    console.log("");
}

orderSandwich();
orderSandwich("Ham", "Cheese", "Lettuce"); 
orderSandwich("Peanut butter", "Jelly");
