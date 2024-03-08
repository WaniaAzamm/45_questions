let personName1: string = "Wania azam";

// In lower case
console.log(personName1.toLowerCase());

// In upper case
console.log(personName1.toUpperCase());

// In title case
let titleCaseString: string = personName1
  .toLowerCase() 
  .replace(/\b\w/g, char => char.toUpperCase()); 
console.log(titleCaseString);
