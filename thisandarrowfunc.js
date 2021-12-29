/**
 * here, we are investigating the relationshib between this 
 * keyword and arrow funcs
 */


 function addToCart(){
    this.productName = 'Laptop'

    this.getProduct = function(){
        function getThis(){
            //this here will refer to the window object
            console.log(this);
            //this in a function is global

        }
        const getThisArr = () =>{
            //this here will refer to and inherit barent this
            console.log(this);
        }
        getThisArr()
        getThis()
        
    }
    this.some = () =>{
        console.log(this);
        //this will work same way
    }
}

let obj = new addToCart()
/*obj.getProduct()
obj.some()

/**
 * 
 * but here, the reason why the normaml function does not work is cus it has its very own this, which is the window this
 * this is cus in a funcion, the this, refers to the gloabal element, but in a method, the this is the owner
 * 
 * but the fat arrow does not have its own this, ie inherits the this of the nearest non fat arrow element
 * 
 */

let objWitMet = {
    firstName:"osamede",
    lastName:"akonofua",
    concatName:function(){
        console.log(`${this.firstName} ${this.lastName}`)
        //but this in a method is the owner object
    },
    concatNameMethod(){// is true method
        console.log(`${this.firstName} ${this.lastName}`)
        //but this in a method is the owner object
    },
    concatNameAr:()=>{
        console.log(`${this.firstName} ${this.lastName}`)
        /**
         * this will not work, because the arrow function
         * does not have its own this keyword
         */
    },
}

objWitMet.concatName()
objWitMet.concatNameMethod()
objWitMet.concatNameAr()
/**
 * in a method like we have in the object above, the this
 * refers to the owner object. so callling this is like calling objwithmet.something.
 * 
 * but what i dont understand is why it works with only normal functions and not arrow functions
 * 
 * anyways,just know that arrow funcs are a no go inside objects
 * 
 * ohh, i understan now, the this of the arrow func is the closest non fat arrow barent, and in an object, that is not bresent
 * an object is an object on its own, not a non fat arrow barent element
 */