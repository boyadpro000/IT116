console.log("Hello World");


let randomNumber = Math.random();

console.log(randomNumber);

//If conditions are met
//operators are used inside of the conditional statements
if (randomNumber < 0.5) {

    console.log("Hello Prodan");
    console.log(randomNumber);

}

if (randomNumber >= 0.5){

    console.log("Random Number is greater than 0.5")
    console.log(randomNumber);

}

//else if statement when conditions arent met


const dayOfWeek = 'Saturday';
 

if (dayOfWeek === 'Monday') {


    console.log('This is Monday');


} else if (dayOfWeek === 'Thursday'){


    console.log("This is Thursday");


} else if (dayOfWeek === 'Saturday'){

    console.log("Hooray today is Saturday");
}

////////////////////////////////////////
const age = prompt('Enter An age');


if (age < 5) { 
    console.log("You are pretty fast - 5");
}else if (age < 10) {
    console.log("Output of the logic compared to CASE STATEMENTS");
}else if (age < 35) {
    console.log("Output of the logic MR Adult.");
}

//Else -- All all conditions in the logic have failed

else {

    console.log("Last resort if all conditions fail")

}



//This will print out papayas and the following message "never had a papaya". It will look through the variables and find 'papaya'
const expr = 'Papayas';

switch (expr) {


    case 'Oranges':
        console.log("Oranges are getting expensive");
        break;

    
    case 'Mangos':
        console.log("Mangos are fire");
        break;


    case 'Papayas':
        console.log("Never had a papaya");
        break;


    default:
        console.log("Sorry I am out of the asked item");


}


const password = prompt("Please enter a new password!!!");

if (password.length >= 6) {

    //Nested condition 
    if (password.indexOf(' ') === -1){

        console.log("Valid Password")

    }else{

        console.log("Password Can't Have Spaces")
    }


} else {

    console.log("Password is too short")
}


function singSong() {

    console.log("Do");

    console.log("Re");

    console.log("Mi");


}

singSong()
singSong()
singSong()

function greet(firstName){
//String literal, greets you with your first name
    console.log(`Hey There, ${firstName}`)
}
greet('Prodan')

function greet1(firstName,lastName){
//greets you with first and last name

    console.log(`Hey there, ${firstName} ${lastName[0]}.`)
}

greet1('Prodan', 'Boyadzhiev')