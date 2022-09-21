const prompt = require('prompt-sync')({sigint: true});


let user = prompt("Choose whether you want to combine colors or deconstruct a color. Enter your choice here: ");
console.log(user);
let choice = prompt("");
let color1 = "";
let color2 = "";
let color3 = "";



if( choice.toUpperCase() === "combine colors"){
    console.log("Which colors would you like to combine? red, blue, yellow")
let color1 = prompt("Please enter 1st color.");
let color2 = prompt("Please enter 2nd color.");
}
if(color1 === "red" && color2 === "blue" || color1 === "blue" && color2 === "red"){
    console.log("Congrats you made purple!")

} else if(color1 === "red" && color2 === "yellow" || color1 === "yellow" && color2 === "red"){
    console.log("Congrats you made orange!");

}else if(color1 === "blue" && color2 === "yellow" || color1 === "yellow" && color2 === "blue"){
    console.log("Congrats you made green!");

} else {
    console.log("error!");
}

if(choice.toUpperCase() === "deconstruct a color"){
console.log("You chose to deconstruct a color, choose a color to deconstruct");
let color3 = prompt("Enter the color to deconstruct can be purple, orange, or green:")
}if(color3 === "purple"){
    console.log("Congrats you made red and blue!")

} else if(color3 === "orange"){
    console.log("Congrats you made yellow and red!");

}else if(color3 === "green"){
    console.log("Congrats you made blue and yellow!");

} else {
    console.log("error!");
}
