/*
Gilbert Nelson
SDI Section #1
Conditionals
09/16/2015
 */

//alert("Test to see if connected.");

//create an array of homes based off size of floor plan

//Array - variable thar holds multiple variables- erase this
//Index # of an array always starts with 0 erase this

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

//how many items are in an array
//length property - access this by using dot syntax or use a period
console.log(typesOfHomes.length);

//Determine what type of house it is by the size
var squareFoot = prompt(" What is the Square Foot of the Home");

//assign values to array numbers

if(100 < squareFoot > 1000) {typesOfHomes[0]}

if(1001 < squareFoot > 1500){typesOfHomes[1]}

if(1501 < squareFoot > 2500){typesOfHomes[2]}

if(2501 < squareFoot > 5000){typesOfHomes[3]}

if(5001 <squareFoot > 10000){typesOfHomes[4]}

else {typesOfHomes[5]
     alert(" It is a villa")
}

//Test each item in the array and check if it is a mansion or a condo

//basic structure of a conditional
// if(condition to test){code that will run if true} if false it skips it
