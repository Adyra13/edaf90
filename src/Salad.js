"use strict";
import inventory from "./inventory.ES6";

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
      accumulator + inventory[currentValue].price;

    //(imported.inventory[currentValue]).price

    return completeSalad.reduce(reducer, 0);
  }

  print() {
    alert(
      "Foundations: " +
        this.myFoundation +
        "\nProteins: " +
        this.myProtein +
        "\nExtras: " +
        this.myExtra +
        "\nDressing: " +
        this.myDressing
    );
  }
}

export default Salad;
