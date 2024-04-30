function orderSandwich(...items: string[]){
    console.log("Sandwich Order Summary:")
 if(items.length === 0){
    console.log("Please, select items for your Sandwich.")
 }else{
    console.log("Items on the sandwich is "  + items.join (', '))
 };   
}
orderSandwich("Chicken", "Mayo");
orderSandwich("Egg","Cabbage","Ketchup");
orderSandwich();
