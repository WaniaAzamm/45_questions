function makeShirt(size:string="Large",message:string="Typescript is Fantastic"):void{
    console.log(`Creating a ${size} sized shirt with the message ${message}.`)
};
makeShirt();
makeShirt("Medium");
makeShirt("Small","Typescript Explorer");