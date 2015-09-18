/*
Gilbert Nelson
SDI Section #1
Conditionals
09/16/2015
 */

//alert("Test to see if connected.");

//create an array of homes based off size of floor plan

//Array for types of homes
var typesOfHomes = ["apartment", "condo", "rancher", "two-story", "mansion", "villa"];

//see entire array
console.log(typesOfHomes);

//console.log for apartment
console.log(typesOfHomes[0]);

//console.log for condo
console.log(typesOfHomes[1]);

//console.log for rancher
console.log(typesOfHomes[2]);

//console.log for two-story
console.log(typesOfHomes[3]);

//console.log for mansion
console.log(typesOfHomes[4]);

//console.log for villa
console.log(typesOfHomes[5]);

//how many items are in the array
console.log(typesOfHomes.length);

//Begin interaction with customer
alert(" You just bought a new place to live");

//variable for money spent
var moniesSpent = prompt("Please enter how much money you spent.");
console.log(moniesSpent);

//validation for monies spent
if(moniesSpent === ""){
    moniesSpent = prompt("Do not leave blank.\n Please enter how much money you spent.");
}
if(isNaN(moniesSpent)){
    moniesSpent = prompt("Please use only numbers.\n Please enter how much money you spent.");
}

//variable for cost per foot
var feetHouse = prompt("What is the cost per square foot");
console.log(feetHouse);

//validation for monies spent
if(feetHouse === ""){
    feetHouse = prompt("Do not leave blank.\n Please enter how much money you spent.");
}
if(isNaN(feetHouse)){
    feetHouse = prompt("Please use only numbers.\n Please enter how much money you spent.");
}

//variable using moniesSpent and feetHouse to determine size of house
var squareFoot = (moniesSpent/feetHouse);
console.log(squareFoot);

//assign values to array numbers, the squareFoot determines which house is alerted, Conditionals, with alerts attached to each conditional
//conditional for apartment
if(100 < squareFoot && squareFoot <= 1000 ) {typesOfHomes[0]
    //alert for apartment
alert("You bought an apartment")}

//conditional for condo
if(1001 < squareFoot && squareFoot <= 1500){typesOfHomes[1]
    //alert for condo
alert("You bought a condo")}

//cn
if(1501 < squareFoot && squareFoot <= 2500){typesOfHomes[2]
alert("You bought a rancher")}

if(2501 < squareFoot && squareFoot <= 5000){typesOfHomes[3]
alert("You bought a two-story")}

if(5001 < squareFoot && squareFoot <= 10000){typesOfHomes[4]
alert("You bought a mansion")}

else {typesOfHomes[5]
alert ("You bought a villa")}