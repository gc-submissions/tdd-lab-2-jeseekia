const cartFunctions = require("../src/js/cart-functions.js");

describe("calculateChange", () => {
  test("total 5,payment 6 returns 1", () =>{
    expect(cartFunctions.calculateChange(5,6)).toEqual(1);
  });
  test("total 12.30,payment 13.03 returns 0.73", () =>{
    expect(cartFunctions.calculateChange(12.30,13.03)).toBeCloseTo(0.73);
  });
  test("total 20,payment 37 returns 17", () =>{
    expect(cartFunctions.calculateChange(20,37)).toEqual(17);
  });
});

describe("isSufficientPayment", () => {
  test("total 5, payment 6 returns true", function(){
    expect(cartFunctions.isSufficientPayment(5,6)).toEqual(true);
  });
  test("total 10, payment 7 returns false", function(){
    expect(cartFunctions.isSufficientPayment(10,7)).toEqual(false);
  });
  test("total 3, payment 3 returns true", function(){
    expect(cartFunctions.isSufficientPayment(3,3)).toEqual(true);
  });
  test("total 115, payment 50 returns false", function(){
    expect(cartFunctions.isSufficientPayment(115,50)).toEqual(false);
  });
});

describe("calculateTotal", () => {
  test("one item priced 4.99 returns 4.99", function(){
    expect(cartFunctions.calculateTotal([{name:"Jelly", price:4.99}])).toBeCloseTo(4.99);
  });
  test("three items priced 3.50,12.99,0.03 returns 16.52", function(){
    expect(cartFunctions.calculateTotal([
      {name:"Jelly", price:3.50},
      {name:"Ground Turkey", price:12.99},
      {name: "Misc", price: 0.03}
    ])).toBeCloseTo(16.52);
  });
  test("empty array returns 0", function(){
    expect(cartFunctions.calculateTotal([])).toEqual(0);
  });
  test("two items priced 3.50,12.99 returns 16.49", function(){
    expect(cartFunctions.calculateTotal([
      {name:"Jelly", price:3.50},
      {name:"Ground Turkey", price:12.99},
    ])).toBeCloseTo(16.49);
  });
});

describe("addItem", () => {
  test("processing an empty array adds one item", function(){
    let results = [];//set up an empty array
    cartFunctions.addItem(results, "Beans", 3); //call function to modify array
    expect(results).toEqual([{name: "Beans", price: 3}]);
  });

  test("processing a one item array adds two items", function(){
    let results = [{name: "Beans", price: 3}];
    cartFunctions.addItem(results, "Sugar", 2); //call function to modify array
    expect(results).toEqual([
      {name: "Beans", price: 3},
      {name: "Sugar", price: 2}
    ]);
  });

  test("processing a two item array adds three items", function(){
    let results = [{name: "Beans", price: 3},{name: "Sugar", price: 2}];
    cartFunctions.addItem(results, "Ground Turkey", 12.99); //call function to modify array
    expect(results).toEqual([
      {name: "Beans", price: 3},
      {name: "Sugar", price: 2},
      {name: "Ground Turkey", price: 12.99}
    ]);
  });
});

describe("removeItem", () => {
  test.todo("add removeItem tests here");
});