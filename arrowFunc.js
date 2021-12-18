var sum = (a,b) => a+b
//console.log(sum(2,4))


//normal es5 function
function add(x,y){
    return x + y
}
//console.log(add(2,4))

//arrow function of es6
const summ = (x,y) => x+y
//console.log(summ(10,2))

//arrow function with single arguemnts is simply devine
const arF = x => x+3
//console.log(arF(43))

//this
//the below example is explained in the exaple itself

function addToCart(){
    this.productName = 'Laptop'

    this.getProduct = function(){

        /**
         * below, we can see an
         * arrow funct used in
         * the settimeout,enabling
         * this to be used inside it
         * otherwise, we would have to redeclare that = this
         */

        setTimeout(()=>{
            //console.log(this.productName)
        }, 1000);

    }
}

let obj = new addToCart()
obj.getProduct()


//get a load of this, called arguement binding
//i really did not know this before
function manyArgs(){
    //console.log(arguments)
}
manyArgs(3,2,4,5)
manyArgs(4,34,2,23,4,55)







/**
 * arrow functions come with default return statement, but only if
 * the function is one line long, if more than one line, parthen must be used.
 * 
 * arrow functions do not have their own "this", but inherit from their parent
 * 
 * so sad that arrow functions do not support arguments, something called reset operator
 * are used
 */