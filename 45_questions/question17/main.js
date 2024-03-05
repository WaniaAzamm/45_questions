var guestList = ["Mahnoor", "Anosha", "Neha", "Alisha", "Anabia", "Rida"];
console.log("i can only invite two people.");
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry ".concat(removedGuest, ", we can only invite two people."));
}
console.log("Hello ".concat(guestList[0], ", you are still invited to dinner."));
console.log("Hello ".concat(guestList[1], ", you are still invited to dinner."));
guestList.pop();
guestList.pop();
console.log(guestList);
