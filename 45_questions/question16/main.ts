let guestList :string[] =["Anosha","Alisha","Alishba"];
console.log(`Good news ${guestList[0]}, We found a bigger dinner table.`);
console.log(`Good news ${guestList[1]}, We found a bigger dinner table.`);
console.log(`Good news ${guestList[2]}, We found a bigger dinner table.`);
let GuestAtBeggining :string = "Mahnoor";
guestList.unshift(GuestAtBeggining);
let GuestAtMiddle : string= "Neha";
let middleIndex : number = Math.floor(guestList.length/2);
guestList.splice(middleIndex, 0, GuestAtMiddle);
let guestAtEnd :string ="Rida";
guestList.push(guestAtEnd);
console.log("New Invitation List:");
console.log(`Dear ${guestList[0]}, you are invited to dinner.`);
console.log(`Dear ${guestList[1]}, you are invited to dinner.`);
console.log(`Dear ${guestList[2]}, you are invited to dinner.`);
console.log(`Dear ${guestList[3]}, you are invited to dinner.`);
console.log(`Dear ${guestList[4]}, you are invited to dinner.`);
console.log(`Dear ${guestList[5]}, you are invited to dinner.`);

