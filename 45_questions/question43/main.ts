function showMagican(magicans:string[]){
     return magicans.forEach(orginal => console.log(orginal));
 };

 function makeGreat(magicans:string[]){
     return magicans.map( (original) =>
         `Great ${original}`)}


 let magicansNames :string[] = ["Harry Houdini", "David Blaine", "Doug Henning","Dai Vernon"];
 let greatMagicans :string[]= makeGreat([...magicansNames])

 console.log("Original List:");
 showMagican(magicansNames)

 console.log("Modified List:");
showMagican(greatMagicans);
