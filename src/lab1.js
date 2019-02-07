"use strict";
import inventory from "./inventory.ES6";
//console.log(imported.inventory["Sallad"]);

var foundation = "Foundations: ";
var protein = "Protein:";
var extra = "Extras: ";
var dressing = "Dressings: ";

for (var key in imported.inventory) {
  if (imported.inventory[key].foundation === true) {
    foundation += key + ", ";
  }
  if (imported.inventory[key].protein === true) {
    protein += key + ", ";
  }
  if (imported.inventory[key].extra === true) {
    extra += key + ", ";
  }
  if (imported.inventory[key].dressing === true) {
    dressing += key + ", ";
  }
}

/*console.log(foundation);
console.log("\n");
console.log(protein);
console.log("\n");
console.log(extra);
console.log("\n");
console.log(dressing);
console.log("\n");*/

class Salad {
  constructor() {
    this.myFoundation = [];
    this.myProtein = [];
    this.myExtra = [];
    this.myDressing = [];
  }

  addF(ingredient) {
    this.myFoundation.push(ingredient);
  }
  addP(ingredient) {
    this.myProtein.push(ingredient);
  }
  addE(ingredient) {
    this.myExtra.push(ingredient);
  }
  addD(ingredient) {
    this.myDressing.push(ingredient);
  }
  removeF(ingredient) {
    var index = this.myFoundation.indexOf(ingredient);
    if (index > -1) {
      this.myFoundation.splice(index, 1);
    }
  }
  removeP(ingredient) {
    var index = this.myProtein.indexOf(ingredient);
    if (index > -1) {
      this.myProtein.splice(index, 1);
    }
  }

  removeE(ingredient) {
    var index = this.myExtra.indexOf(ingredient);
    if (index > -1) {
      this.myExtra.splice(index, 1);
    }
  }
  removeD(ingredient) {
    var index = this.myDressing.indexOf(ingredient);
    if (index > -1) {
      this.myDressing.splice(index, 1);
    }
  }

  price() {
    var completeSalad = [];
    completeSalad = this.myFoundation
      .concat(this.myProtein)
      .concat(this.myExtra)
      .concat(this.myDressing);

    const reducer = (accumulator, currentValue) =>
      accumulator + imported.inventory[currentValue].price;

    //(imported.inventory[currentValue]).price

    return completeSalad.reduce(reducer, 0);
  }
}

class ExtraGreenSalad extends Salad {
  price() {
    var completeSalad = [];
    completeSalad = this.myFoundation
      .concat(this.myProtein)
      .concat(this.myExtra)
      .concat(this.myDressing);
    function obj(currentValue) {
      if (imported.inventory[currentValue].foundation) {
        return imported.inventory[currentValue].price * 1.3;
      } else {
        return imported.inventory[currentValue].price * 0.5;
      }
    }
    const reducer = (accumulator, currentValue) =>
      accumulator + obj(currentValue);

    return completeSalad.reduce(reducer, 0);
  }
}

class GourmetSalad extends Salad {
  addF(ingredient, value = 1) {
    var addedIngredient = { ingredient: ingredient, value: value };

    this.myFoundation.push(addedIngredient);
  }
  addP(ingredient, value = 1) {
    var addedIngredient = { ingredient: ingredient, value: value };

    this.myProtein.push(addedIngredient);
  }
  addE(ingredient, value = 1) {
    var addedIngredient = { ingredient: ingredient, value: value };

    this.myExtra.push(addedIngredient);
  }
  addD(ingredient, value = 1) {
    var addedIngredient = { ingredient: ingredient, value: value };

    this.myDressing.push(addedIngredient);
  }

  price() {
    var completeSalad = [];
    completeSalad = this.myFoundation
      .concat(this.myProtein)
      .concat(this.myExtra)
      .concat(this.myDressing);
    function obj(currentValue) {
      return (
        imported.inventory[currentValue.ingredient].price * currentValue.value
      );
    }
    const reducer = (accumulator, currentValue) =>
      accumulator + obj(currentValue);

    return completeSalad.reduce(reducer, 0);
  }
}

let myCeasarSalad = new Salad();
myCeasarSalad.addF("Sallad");
myCeasarSalad.addP("Kycklingfilé");
myCeasarSalad.addE("Krutonger");
myCeasarSalad.addE("Tomat");
myCeasarSalad.addE("Parmesan");
myCeasarSalad.addD("Ceasardressing");

console.log(myCeasarSalad);
console.log("Price: " + myCeasarSalad.price());

let mySuperGreenSalad = new ExtraGreenSalad();
mySuperGreenSalad.addF("Sallad");
mySuperGreenSalad.addP("Kycklingfilé");
mySuperGreenSalad.addE("Krutonger");
mySuperGreenSalad.addE("Tomat");
mySuperGreenSalad.addE("Parmesan");
mySuperGreenSalad.addD("Ceasardressing");

console.log(mySuperGreenSalad);
console.log("Price: " + mySuperGreenSalad.price());

let myGourmetSalad = new GourmetSalad();
myGourmetSalad.addF("Sallad", 0.7);
myGourmetSalad.addP("Kycklingfilé", 1.2);
myGourmetSalad.addE("Krutonger");
myGourmetSalad.addE("Tomat", 1.5);
myGourmetSalad.addE("Parmesan", 2);
myGourmetSalad.addD("Ceasardressing", 2);

console.log(myGourmetSalad);
console.log("Price: " + myGourmetSalad.price());

export default Salad;
