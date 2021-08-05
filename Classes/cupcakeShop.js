class Cupcake {
    constructor(batter, icing, cost){
        this.batter = batter; //this is THIS INSTANCE of the class
        this.icing = icing;
        this.cost = cost;
    }
    getDescription(){
        return `A $${this.cost} ${this.batter} cupcake with ${this.icing} icing on top.`
    }
}

/* THESE ARE POTENTIAL INSTANCES OF THE CUPCAKE CLASS
let blueberry = new Cupcake("vanilla", "blueberry", 10);
let raspberry = new Cupcake("vanilla", "raspberry", 12);
etc.
*/

let blueberry = new Cupcake("vanilla", "blueberry", 10);
console.log(blueberry.getDescription());

class CupcakeShop{
    constructor(location){ // YOU CAN ONLY HAVE 1 CONSTRUCTOR IN A CLASS
        this.location = location;
        this.inventory =[];
        this.cash = 0;
    }
    getStatus(){
        return `This shop currently has $${this.cash} and ${this.inventory.length} cupcakes!`
    }
    bakeBatch (numberOfCupcakes, batter, icing, pricePerCupcake){
        for (let i = 0; i<numberOfCupcakes; i++){
            let newCupcake = new Cupcake(batter, icing, pricePerCupcake);
            this.addToInventory(newCupcake);
        }
    }
    addToInventory(cupcake){
        this.inventory.push(cupcake)
    }
    sellCupcake(){
        if(this.inventory.length>0){
            let toSell = this.inventory.pop(); //pop is kind of a cheat in this, because it just uses the last one. It's not best practice for a real shop.
            this.cash = this.cash +toSell.cost
        }else{
            return "No cupcakes to sell";
        }
    }
}

let fortWayne = new CupcakeShop ("Fort Wayne");
console.log(fortWayne)
console.log(fortWayne.getStatus());

fortWayne.bakeBatch(10,"vanilla", "blueberry", 3.99);
console.log(fortWayne.getStatus());

let firstSoldCupcake = fortWayne.sellCupcake();
console.log(firstSoldCupcake);
console.log(fortWayne.getStatus());