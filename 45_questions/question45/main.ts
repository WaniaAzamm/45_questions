interface Car{
    manufacture:string;
    modelName:string;
    color?:string;
    optionalFeature?:string;
}
function createCar(manufacture:string, modelName:string, color?:string, optionalFeature?:string): Car {
    let car : Car ={
    manufacture,
    modelName,
    color,
    optionalFeature,
}
return car
};

let myCar =createCar("Toyota","Camry","Burning Black","Sunroof");
console.log(myCar);