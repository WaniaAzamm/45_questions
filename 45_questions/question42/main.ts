let magicans :string[]=["Harry Houdini", "David Blaine", "Doug Henning","Dai Vernon"];
function show_magicans(magicansArray:string[]){
    console.log("Magicans:")
    magicansArray.forEach(magicans =>{
        console.log(magicans)
    });
}
function make_great(magicansArray:string[]): string[]{
    return magicansArray.map(magicans => `Great ${magicans}`)
};
let greatMagicans =make_great(magicans);
show_magicans(greatMagicans);


