let currentUsers :string[] =["wania","Alisha","Anabia","Anosha","alishba"];
let newUsers :string[]= ["Wania","Fiza","Aksa","Alishba","Bisma"];
for(let newUser of newUsers){
    let isTaken = currentUsers.includes(newUser.toLowerCase());
    console.log(`Username ${newUser} is ${isTaken ? "Taken" :"Available."}`)
};