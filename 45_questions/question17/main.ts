let guestList : string[]=["Mahnoor", "Anosha", "Neha", "Alisha", "Anabia", "Rida"];
console.log("i can only invite two people.");
while(guestList.length>2){
    let removedGuest :string |undefined= guestList.pop();
    console.log(`Sorry ${removedGuest}, we can only invite two people.`)
}
console.log(`Hello ${guestList[0]}, you are still invited to dinner.`);
console.log(`Hello ${guestList[1]}, you are still invited to dinner.`);
guestList.pop();
guestList.pop();
console.log(guestList);