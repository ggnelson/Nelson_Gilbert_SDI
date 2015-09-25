
/*
  Gilbert Nelson
  SDI Section #1
  Functions
  09/24/2015
 */


//Alert the user what they are doing
alert("There are two cars racing.\n Find out who finished sooner ")

//ask the user the for the Distance
var raceDistance = prompt("What is the Distance of the race");

//validate the distance variable
while(raceDistance==="" || isNaN(raceDistance)){
    //re-prompt the user if they dont do it right
    if(raceDistance===""){
        raceDistance = prompt("Please do not leave blank.\n What is the min number:");
        raceDistance = parseInt(raceDistance);
    }
    else if(isNaN(raceDistance)){
        raceDistance = prompt("Please only use numbers\n What is the min number:");
        raceDistance = parseInt(raceDistance);
    }
}

//console.log
console.log(raceDistance);


//ask the user for speed of car A
var carA = prompt("What is the Speed of the Race car A");

//validate the CarA speed variable
while(carA==="" || isNaN(carA)){
    //re-prompt the user for speed if they don't do it right
    if(carA===""){
        carA = prompt("Please do not leave blank.\n What is the Speed of the Race car A:");
        carA = parseInt(carA);
    }
    else if(isNaN(carA)){
        carA = prompt("Please only use numbers\n What is the Speed of the Race car A:");
        carA = parseInt(carA);
    }
}
//console.log
console.log(carA);


//ask the user for speed of car A
var carB = prompt("What is the Speed of the Race car B");

//validate the CarA speed variable
while(carB==="" || isNaN(carB)){
    //re-prompt the user for speed if they don't do it right
    if(carB===""){
        carB = prompt("Please do not leave blank.\n What is the Speed of the Race car B:");
        carB = parseInt(carB);
    }
    else if(isNaN(carB)){
        carB = prompt("Please only use numbers\n What is the Speed of the Race car B:");
        carB = parseInt(carB);
    }
}
//console.log
console.log(carB);


//ANON Functions for car A
var carASpeed = function(carA, raceDistance){
    var carATime = raceDistance / carA;
    return carATime;
};
//Car A function call
var timeTotalA = carASpeed(carA,raceDistance);
console.log(timeTotalA+"is the total.");
alert("It took Car A "+timeTotalA+"hrs");

//ANON Functions for car B
var carBSpeed = function(carB, raceDistance){
    var carBTime = raceDistance / carB;
    return carBTime;
};
//Car B function call
var timeTotalB = carBSpeed(carB,raceDistance);
console.log(timeTotalB+"is the total.");
alert("It took Car A "+timeTotalB+"hrs");


//function for time fastest car finished before the slower car
var timeDifference = raceTime(timeTotalA, timeTotalB);
raceTime(timeTotalA, timeTotalB);

console.log("Your time difference is "+timeDifference);
function raceTime(totala, totalb) {

    var diffTime =Math.abs(totala - totalb) ;
    console.log(diffTime);
    //return the value to our main code
    return diffTime;
}
alert("The difference between Car A finishing and Car B finishing is "+timeDifference+"hr");

if(timeTotalA < timeTotalB){
    alert("Car A is Faster than Car B");
}