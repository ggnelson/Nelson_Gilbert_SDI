/*
Gilbert Nelson
SDI Section #1
Expressions
9-10-2015
 */

//alert("Test to see if connected.");

//Create a calculator for which phone is using the most data for the month

//ask the user for the amount of data they have a month

var data = prompt("Please enter your service carrier.");

// use the variable to tell user what plan he has
alert("Your plan with "+data+" normally uses 10 GB a month. ");

//What amount equals 100%
var monthlyGB = prompt("How many GB does your plan have per month to share");

//see how many phones are in the plan
var numberPhones = prompt(" How many phones are on your plan?");

//console.log the answer for the equation
console.log(numberPhones);

//how many GB did the users phone use this month
var phoneData = prompt(" How many GB did your phone use this month");

//console.log the answer for the equation
console.log(phoneData);


//tell them how much data your phone uses
var dataPerc = (phoneData / monthlyGB) * 100;

//console.log the answer for extra question
console.log(dataPerc);

//alert user to how much they are using
alert("you use " +dataPerc+ "% of the data");

//the amount of data the other phone uses
var otherPhone = 100 - dataPerc;

//alert user to other phones usage percentage
alert(" the other phone(s) uses " +otherPhone+ "% of the data together");

if (numberPhones > 2) {var eachPhone = (otherPhone / (numberPhones - 1))};

alert("Each other Phone uses " +eachPhone+ "% of the data a piece");

