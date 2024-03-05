let favouritePlaces :string[] =["Japan", "Switerzland", "Canada","Paris","China"];
console.log("Original Order:",favouritePlaces);
console.log("Alphabetical Order:", [...favouritePlaces].sort());
console.log("Order after Sorting:",favouritePlaces);
console.log("Alphabetical Reversed Order:",[...favouritePlaces].sort().reverse());
console.log("Order After Alphabetical Reversed:",favouritePlaces)
favouritePlaces.reverse();
console.log("Reversed Order:",favouritePlaces);
favouritePlaces.reverse();
console.log("back to Original Order:",favouritePlaces);
favouritePlaces.sort();
console.log("Sort Order:",favouritePlaces)
favouritePlaces.sort().reverse();
console.log("Sort Reversed Order:",favouritePlaces);
