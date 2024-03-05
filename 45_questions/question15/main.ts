let guestList :string[] =["Anosha","Alisha","Anabia"];
let unableToAttend :string|undefined = guestList.pop();
console.log(`Unfortunetly ${unableToAttend}, can't make it to the dinner.`);
let newGuest :string ="Alishba";
guestList.push(newGuest);
console.log(`Hello ${guestList[0]}, you are invited to dinner.hope to see you there`);
console.log(`Hello ${guestList[1]}, you are invited to dinner.hope to see you there`);
console.log(`Hello ${guestList[2]}, you are invited to dinner.hope to see you there`);