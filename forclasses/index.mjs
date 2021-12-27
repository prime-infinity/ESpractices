import { Animal,Cat } from "./animal.mjs";

let cat = new Cat('cat',4)
cat.makeNoise()
console.log(cat.metaData) //as is evident, the cat class has inherited all methods and broberties of its barent class

//let cat = new Animal('cat',4) //create an instance of the class 
/*
cat.legs = 3

console.log(cat.type);
console.log(cat.legs);
cat.makeNoise('meow')*/

//console.log(Animal.returnSome());
/**
 * the above function return a static function that dosent need
 * to be instanited before use
 */


//console.log(cat.metaData); 


/**
 * THe above is a getter function on our class that is being treated 
 * like a proerty 
 */
