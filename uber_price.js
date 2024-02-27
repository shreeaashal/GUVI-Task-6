class Uber {
    constructor (distance, pickup, drop){
        this.distance = distance;
        this.pickup = pickup;
        this.drop = drop;
    }
    getprice(){
    var a = 22;
    var price = a * (this.distance);
    return `the price for travel from ${c1.pickup} to ${c1.drop} is ${price}`;
    }
} 
var c1 = new Uber("100","koyambedu","vanagaram")
console.log(c1.getprice())