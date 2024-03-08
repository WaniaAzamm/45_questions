let personName1 : string ="Wania azam";
//in lower case
console.log(personName1.toLowerCase());
//in upper case
console.log(personName1.toUpperCase());
//in tittle case
let titleCaseString :string = personName1;
.toLowerCase()
.replace(/\b\w/g, char => char.toUpperCase());
console.log(titleCaseString);
